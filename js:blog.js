// Load Blog Posts from Google Blogger RSS Feed
function loadBlogPosts() {
    const blogPreview = document.getElementById('blogPreview');
    
    // Google Blogger RSS feed URL
    const rssFeedUrl = 'https://mudasir-ibrahim.blogspot.com/feeds/posts/default?alt=json&max-results=3';
    
    // Use CORS proxy to avoid CORS issues (public proxy)
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const fullUrl = proxyUrl + encodeURIComponent(rssFeedUrl);
    
    blogPreview.innerHTML = `
        <div class="blog-loading" style="text-align: center; padding: var(--spacing-xl); background-color: var(--bg-primary); border-radius: 12px; border: 1px solid var(--border);">
            <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--accent); margin-bottom: var(--spacing-md);"></i>
            <p>Loading latest blog posts...</p>
        </div>
    `;
    
    fetch(fullUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const feedData = JSON.parse(data.contents);
            const posts = feedData.feed.entry || [];
            
            if (posts.length === 0) {
                showFallbackBlogPosts();
                return;
            }
            
            displayBlogPosts(posts);
        })
        .catch(error => {
            console.error('Error fetching blog posts:', error);
            showFallbackBlogPosts();
        });
}

function displayBlogPosts(posts) {
    const blogPreview = document.getElementById('blogPreview');
    const blogViewAllButton = document.getElementById('blogViewAllButton');
    
    let blogHTML = `
        <div class="blog-preview-grid">
            <h3 class="blog-preview-header">Latest Blog Posts</h3>
    `;
    
    posts.forEach((post, index) => {
        const title = post.title.$t || 'Untitled Post';
        const content = post.content.$t || '';
        const published = post.published.$t || new Date().toISOString();
        const link = post.link.find(l => l.rel === 'alternate').href || '#';
        
        // Extract clean excerpt (remove HTML tags, limit length)
        const excerpt = extractExcerpt(content, 150);
        
        // Format date nicely
        const date = new Date(published).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Get first letter for icon (if you want text-based icons)
        const firstLetter = title.charAt(0).toUpperCase();
        
        // Category based on index (for demo purposes)
        const categories = ['Healthcare', 'Research', 'Technology', 'Nursing', 'Data Analysis'];
        const category = categories[index % categories.length];
        
        blogHTML += `
            <div class="blog-post-card">
                <div class="blog-post-image">
                    <i class="fas fa-blog"></i>
                </div>
                <div class="blog-post-content">
                    <h4 class="blog-post-title">${title}</h4>
                    <p class="blog-post-excerpt">${excerpt}</p>
                    <div class="blog-post-meta">
                        <span class="blog-post-date">${date}</span>
                        <a href="${link}" target="_blank" class="blog-read-more">
                            Read <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    
    blogHTML += '</div>';
    blogPreview.innerHTML = blogHTML;
    
    // Show the "VIEW ALL BLOG POSTS" button when posts are displayed
    if (blogViewAllButton) {
        blogViewAllButton.style.display = 'block';
    }
}

function extractExcerpt(content, maxLength) {
    // Remove HTML tags
    const text = content.replace(/<[^>]*>/g, '');
    
    // Decode HTML entities
    const decoded = text.replace(/&amp;/g, '&')
                       .replace(/&lt;/g, '<')
                       .replace(/&gt;/g, '>')
                       .replace(/&quot;/g, '"')
                       .replace(/&#39;/g, "'");
    
    // Trim and limit length
    if (decoded.length > maxLength) {
        return decoded.substring(0, maxLength) + '...';
    }
    return decoded;
}

function showFallbackBlogPosts() {
    const blogPreview = document.getElementById('blogPreview');
    const blogViewAllButton = document.getElementById('blogViewAllButton');
    
    blogPreview.innerHTML = `
        <div class="blog-error">
            <i class="fas fa-exclamation-circle"></i>
            <h3 style="margin-bottom: var(--spacing-sm);">Unable to load blog posts</h3>
            <p style="margin-bottom: var(--spacing-lg); color: var(--text-secondary);">
                Please visit my blog directly to read all posts.
            </p>
            <div style="text-align: center;">
                <a href="https://mudasir-ibrahim.blogspot.com" target="_blank" class="btn" 
                   style="background: linear-gradient(135deg, #ff5722, #ff9800); color: white; 
                          padding: 0.875rem 1.5rem; font-size: 1rem; font-weight: 600;">
                    <i class="fas fa-external-link-alt"></i> Visit My Blog
                </a>
            </div>
        </div>
    `;
    
    // Hide the "VIEW ALL BLOG POSTS" button when showing error
    if (blogViewAllButton) {
        blogViewAllButton.style.display = 'none';
    }
}

// Load blog posts when DOM is ready
document.addEventListener('DOMContentLoaded', loadBlogPosts);