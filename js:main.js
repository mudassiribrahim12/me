// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set current year (automatic yearly update)
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Load projects
    loadFeaturedProjects();
    loadAllProjects();
    
    // Initialize theme (ONLY CALL THIS ONCE)
    initTheme();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize modal
    initModal();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize contact form with AJAX submission
    initContactForm();
    
    // Initialize search functionality
    initSearch();
    
    // Initialize Back to Top Button
    initBackToTopButton();
    
    // Initialize logo click handler for reload
    initLogoClickHandler();
    
    // Add Minimal Cursor Effect here
    initMinimalCursorEffect();
    
    // Initialize typing effect
    initTypingEffect();
    
    console.log('Website initialized successfully');
});

// All 20 R Shiny Applications Data
const allProjects = [
    {
        id: 1,
        name: "APA Table Generator",
        description: "Generate APA formatted tables for research papers and publications",
        runUrl: "https://newappstesting.shinyapps.io/APATableGenerator/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/APA%20Table%20Generator%20Pro.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/APA logo.png"
    },
    {
        id: 2,
        name: "SysSampler",
        description: "Systematic sampling tool for research studies with various sampling methods",
        runUrl: "https://mudassiribrahim2025b.shinyapps.io/SysSampler/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/SysSampler",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/Sys Sampler.png"
    },
    {
        id: 3,
        name: "CATrend Analyzer",
        description: "Cochran-Armitage test for trend tool",
        runUrl: "https://newappstesting.shinyapps.io/CATrendAnalyzer/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/CATrendAnalyzer.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/CAtrend.png"
    },
    {
        id: 4,
        name: "CMH Analyzer",
        description: "Cochran-Mantel-Haenszel analysis tool for stratified data",
        runUrl: "https://newappstesting.shinyapps.io/CMHAnalyzer/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/CMHAnalyzer.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/CMH.png"
    },
    {
        id: 5,
        name: "Data2SPSS",
        description: "Convert datasets in CSV, Excel, Rdata, Stata, or SAS format into SPSS (.sav) files",
        runUrl: "https://newappstesting.shinyapps.io/Data2SPSS/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/Data2SPSS",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/Data2SPSS.png"
    },
    {
        id: 6,
        name: "TNMTC DataLab",
        description: "Comprehensive data analysis software for healthcare research",
        runUrl: "https://newappstesting.shinyapps.io/NMTCDataLab/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/NMTC%20APP.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/TNMTC.png"
    },
    {
        id: 7,
        name: "PharmaCalc Pro",
        description: "Pharmaceutical calculations for dosage and medication management",
        runUrl: "https://mudassiribrahim2025b.shinyapps.io/PharmaCalcPro/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/PharmaCalcPro.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/Pharma.png"
    },
    {
        id: 8,
        name: "RegEffect Xplorer",
        description: "Explore regression effects visually with interactive plots",
        runUrl: "https://mudassiribrahim2025b.shinyapps.io/RegEffectXplorer/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/RegEffectXplorer.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/RegEf.png"
    },
    {
        id: 9,
        name: "Data TransformR",
        description: "Data transformation and preprocessing tool for analytics",
        runUrl: "https://mudassiribrahim2025b.shinyapps.io/DataTransformR/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/DataTransformR.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/DataTrans.png"
    },
    {
        id: 10,
        name: "CleanMyData",
        description: "Data screening and cleaning tool with visualization",
        runUrl: "https://mudassiribrahim2025b.shinyapps.io/CleanMyData/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/CleanMyData.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/CleanMyData.png"
    },
    {
        id: 11,
        name: "KMPlot Genie",
        description: "Kaplan-Meier survival plot generator for clinical studies",
        runUrl: "https://mudassiribrahim30.shinyapps.io/KMPlotGenie/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/KMPlotGenie.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/KMPlot.png"
    },
    {
        id: 12,
        name: "ggPubPlot",
        description: "Publication-ready ggplot2 visualizations with customization",
        runUrl: "https://mudassiribrahim2025.shinyapps.io/ggPubPlot/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/ggPubPlot.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/ggLogo.png"
    },
    {
        id: 13,
        name: "EpiDem Suite",
        description: "Epidemiological data analysis suite for public health research",
        runUrl: "https://mudassiribrahim2025.shinyapps.io/EpiDemSuite/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/EpiDem%20Suite.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/EpiDem.png"
    },
    {
        id: 14,
        name: "QuickStatsGen",
        description: "Custom Data Generator for Statistical Practice and Education",
        runUrl: "https://mudassiribrahim2025.shinyapps.io/QuickStatsGen/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/QuickStatsGen.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/QuickStats.png"
    },
    {
        id: 15,
        name: "MedModr",
        description: "Mediation and moderation analysis tool for research studies",
        runUrl: "https://mudassiribrahim30.shinyapps.io/MedModr/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/MedModr.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/MedModr.png"
    },
    {
        id: 16,
        name: "Robust Regressor",
        description: "Robust regression analysis for outlier-resistant modeling",
        runUrl: "https://mudassiribrahim2025.shinyapps.io/Robustregression/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/Robust%20%20Regressor.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/Robust.png"
    },
    {
        id: 17,
        name: "ROC Curve Builder",
        description: "ROC curve analysis and diagnostic test evaluation",
        runUrl: "https://mudassiribrahim30.shinyapps.io/ROC_CURVE/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/ROC%20Curve%20Builder.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/ROC.png"
    },
    {
        id: 18,
        name: "TagSelect",
        description: "Participant selection tool for research studies",
        runUrl: "https://mudassiribrahim30.shinyapps.io/Tagselect/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/TagSelect.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/TagSelect.png"
    },
    {
        id: 19,
        name: "FAnalyzr",
        description: "Factor analysis and dimensionality reduction tool",
        runUrl: "https://mudassiribrahim30.shinyapps.io/fanalyzr/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/FAnalyzr.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/FA.png"
    },
    {
        id: 20,
        name: "CalcuStats",
        description: "Tool for sample size calculation, power analysis, and descriptive statistics",
        runUrl: "https://mudassiribrahim2025.shinyapps.io/CalcuStats/",
        codeUrl: "https://github.com/mudassiribrahim30/R-Shiny-Apps/blob/main/CalcuStats.R",
        imageUrl: "https://raw.githubusercontent.com/mudassiribrahim12/me/main/CalcuStats.png"
    }
];

// Load Featured Projects (first 6)
function loadFeaturedProjects() {
    const container = document.getElementById('featuredProjectsGrid');
    container.innerHTML = '';
    const featured = allProjects.slice(0, 6);
    
    featured.forEach(project => {
        container.appendChild(createProjectCard(project));
    });
}

// Load All Projects
function loadAllProjects() {
    const container = document.getElementById('allProjectsGrid');
    container.innerHTML = '';
    
    allProjects.forEach(project => {
        container.appendChild(createProjectCard(project));
    });
}

// Function to properly format the white and bold name
function formatLogoName() {
    const logo = document.getElementById('logoLink');
    if (!logo) return;
    
    // Get the text content
    const fullName = logo.textContent.trim();
    
    // Find where the space is
    const spaceIndex = fullName.indexOf(' ');
    
    if (spaceIndex > 0) {
        const firstName = fullName.substring(0, spaceIndex);
        const lastName = fullName.substring(spaceIndex + 1);
        
        // Create colored spans with proper white text
        logo.innerHTML = `
            <span class="first-part">${firstName}</span>
            <span class="name-space"> </span>
            <span class="last-part">${lastName}</span>
        `;
    }
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    formatLogoName();
    
    // Also call it when logo is clicked (since you have reload functionality)
    const logo = document.getElementById('logoLink');
    if (logo) {
        const originalClick = logo.onclick;
        logo.onclick = function(e) {
            // Reapply formatting after a short delay when logo is clicked
            setTimeout(formatLogoName, 100);
            if (originalClick) originalClick.call(this, e);
        };
    }
});

// Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <div class="project-img-container">
            <img src="${project.imageUrl}" alt="${project.name}" class="project-img" onerror="this.src='https://via.placeholder.com/300x200?text=R+Shiny'">
        </div>
        <div class="project-info">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                <span class="tag">R Shiny</span>
                <span class="tag">Healthcare</span>
                <span class="tag">Research</span>
            </div>
            <div class="project-actions">
                <a href="${project.runUrl}" target="_blank" class="btn">Run App</a>
                <a href="${project.codeUrl}" target="_blank" class="btn btn-outline">View Code</a>
            </div>
        </div>
    `;
    
    return card;
}

// Theme Toggle - FIXED VERSION
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme');
    
    // Apply saved theme if it exists
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.className = 'fas fa-sun';
    } else {
        // Default to light theme
        document.body.classList.remove('dark-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light'); // Set default
    }
    
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNav = document.getElementById('mobileNav');
    
    mobileMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        mobileMenu.innerHTML = mobileNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Modal
function initModal() {
    const viewAllBtn = document.getElementById('viewAllProjectsBtn');
    const modal = document.getElementById('allProjectsModal');
    const closeBtn = document.getElementById('closeModal');
    
    viewAllBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Don't prevent default for external links
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('http')) return; // Skip external links
            
            e.preventDefault();
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header scroll effect - starts solid, becomes transparent on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    
    if (scrollY > 10) {
        header.classList.add('scrolled');
        header.classList.remove('not-scrolled');
        
        // Adjust transparency based on scroll amount
        if (scrollY > 100) {
            header.classList.add('more');
            // Dynamic opacity - becomes more transparent as you scroll further
            const opacity = Math.max(0.3, 0.7 - (scrollY / 1000));
            header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
        } else {
            header.classList.remove('more');
            // Smooth transition from solid to transparent
            const opacity = 0.9 - (scrollY / 200);
            header.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(0.5, opacity)})`;
        }
        
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.classList.remove('scrolled', 'more');
        header.classList.add('not-scrolled');
        header.style.backgroundColor = '#000000'; // Solid black
        header.style.backdropFilter = 'none';
        header.style.boxShadow = 'none';
    }
});

// Initialize header on page load
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.classList.add('not-scrolled');
    header.style.backgroundColor = '#000000'; // Solid black at start
    header.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Force a small delay to ensure styles are applied
    setTimeout(() => {
        if (window.scrollY === 0) {
            header.style.backgroundColor = '#000000';
            header.style.backdropFilter = 'none';
        }
    }, 100);
});

// Contact Form Submission with AJAX
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Hide any previous message
        formMessage.style.display = 'none';
        
        try {
            // Create FormData object
            const formData = new FormData(contactForm);
            
            // Send to Formspree using AJAX
            const response = await fetch('https://formspree.io/f/xanrpwae', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                formMessage.style.display = 'block';
                formMessage.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
                formMessage.style.border = '1px solid #4caf50';
                formMessage.style.color = '#4caf50';
                formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. I will get back to you soon.';
                
                // Reset form
                contactForm.reset();
                
                // Hide message after 10 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 10000);
            } else {
                // Show error message for Formspree error
                const errorData = await response.json();
                throw new Error(errorData.error || 'Form submission failed');
            }
            
        } catch (error) {
            // Show error message
            formMessage.style.display = 'block';
            formMessage.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
            formMessage.style.border = '1px solid #f44336';
            formMessage.style.color = '#f44336';
            formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> There was an error sending your message. Please try again or email me directly at mudassiribrahim30@gmail.com';
            
            console.error('Form submission error:', error);
        } finally {
            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}

// Fixed Search functionality
function initSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchDropdown = document.getElementById('searchDropdown');
    const searchInput = document.getElementById('searchInput');
    const searchSubmit = document.getElementById('searchSubmit');
    
    // Debug logging
    console.log('Search elements found:', {
        searchToggle: !!searchToggle,
        searchDropdown: !!searchDropdown,
        searchInput: !!searchInput,
        searchSubmit: !!searchSubmit
    });
    
    // Toggle search dropdown
    if (searchToggle) {
        searchToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            searchDropdown.classList.toggle('active');
            console.log('Search toggle clicked, dropdown active:', searchDropdown.classList.contains('active'));
            
            // Focus on input when dropdown opens
            if (searchDropdown.classList.contains('active')) {
                setTimeout(() => {
                    searchInput.focus();
                }, 100);
            }
        });
    }
    
    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchDropdown.contains(e.target) && !searchToggle.contains(e.target)) {
            searchDropdown.classList.remove('active');
            const searchResults = document.getElementById('searchResults');
            if (searchResults) {
                searchResults.classList.remove('active');
                searchResults.innerHTML = '';
            }
        }
    });
    
    // Prevent closing when clicking inside search dropdown
    if (searchDropdown) {
        searchDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    // Perform search
    function performSearch(query) {
        console.log('Performing search for:', query);
        if (!query.trim()) {
            const searchResults = document.getElementById('searchResults');
            if (searchResults) {
                searchResults.classList.remove('active');
                searchResults.innerHTML = '';
            }
            return;
        }
        
        const results = searchWebsite(query.toLowerCase());
        console.log('Search results:', results.length);
        displayResults(results, query);
    }
    
    // Search on input with debounce
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(e.target.value);
            }, 300);
        });
    }
    
    // Search on submit
    if (searchSubmit) {
        searchSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            performSearch(searchInput.value);
        });
    }
    
    // Search on Enter key
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(searchInput.value);
            }
        });
    }
    
    // Add suggestions on focus
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim() === '') {
                const searchResults = document.getElementById('searchResults');
                if (searchResults) {
                    const suggestions = [
                        "R Shiny web applications",
                        "Healthcare research",
                        "Statistical analysis",
                        "Nursing experience",
                        "Publications",
                        "Patient care",
                        "Clinical nursing"
                    ];
                    
                    let suggestionsHTML = '<div class="no-results" style="text-align: left;">';
                    suggestionsHTML += '<p style="font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">Try searching for:</p>';
                    suggestions.forEach(suggestion => {
                        suggestionsHTML += `<div style="padding: 0.25rem 0; color: var(--accent); cursor: pointer;" class="suggestion-item" data-suggestion="${suggestion}">${suggestion}</div>`;
                    });
                    suggestionsHTML += '</div>';
                    
                    searchResults.innerHTML = suggestionsHTML;
                    searchResults.classList.add('active');
                    
                    // Add click handlers to suggestions
                    document.querySelectorAll('.suggestion-item').forEach(item => {
                        item.addEventListener('click', () => {
                            searchInput.value = item.getAttribute('data-suggestion');
                            performSearch(item.getAttribute('data-suggestion'));
                        });
                    });
                }
            }
        });
    }
}

// Fixed searchWebsite function
function searchWebsite(query) {
    console.log('Searching website for:', query);
    
    const searchableContent = [
        // Home/Hero section
        {
            id: 'home-content',
            title: 'Home - Mudasir Mohammed Ibrahim',
            content: 'A healthcare professional, researcher, and data analyst. During my leisure time, when I\'m not at work or conducting research, I create accessible R Shiny web applications that simplify complex analyses for healthcare professionals, students, and researchers. Registered Nurse',
            url: '#home',
            type: 'section',
            sectionId: 'home',
            elementId: 'home'
        },
        
        // Projects section
        {
            id: 'projects-content',
            title: 'R Shiny Applications',
            content: 'APA Table Generator, SysSampler, CATrend Analyzer, CMH Analyzer, Data2SPSS, TNMTC DataLab, PharmaCalc Pro, RegEffect Xplorer, Data TransformR, CleanMyData, KMPlot Genie, ggPubPlot, EpiDem Suite, QuickStatsGen, MedModr, Robust Regressor, ROC Curve Builder, TagSelect, FAnalyzr, CalcuStats',
            url: '#projects',
            type: 'section',
            sectionId: 'projects',
            elementId: 'projects'
        },
        
        // Blog section
        {
            id: 'blog-content',
            title: 'Blog Posts',
            content: 'Google Blogger with insights on healthcare research, nursing, data analysis, and technology in healthcare.',
            url: '#blog',
            type: 'section',
            sectionId: 'blog',
            elementId: 'blog'
        },
        
        // About section
        {
            id: 'about-content',
            title: 'About Mudasir',
            content: 'Mudasir Mohammed Ibrahim is a Ghanaian nurse with extensive clinical experience at Tamale Teaching Hospital. He is also an experienced researcher with expertise in advanced quantitative methods including Structural Equation Modeling (SEM), factor analysis, and other rigorous statistical techniques.',
            url: '#about',
            type: 'section',
            sectionId: 'about',
            elementId: 'about'
        },
        
        // Research interests
        {
            id: 'research-interests',
            title: 'Research Interests',
            content: 'Chronic Diseases Epidemiology, Maternal and Child Health, Public Health, Workplace Issues',
            url: '#about',
            type: 'subsection',
            sectionId: 'about',
            elementId: 'research-interests'
        },
        
        // Core competencies (updated with Patient Care)
        {
            id: 'core-competencies',
            title: 'Core Competencies',
            content: 'Patient Care & Clinical Nursing, Health/Clinical Research, Advanced Statistical Analysis, R Shiny Development (AI-assisted coding), Scientific Writing & Peer Review, Healthcare Data Management',
            url: '#about',
            type: 'subsection',
            sectionId: 'about',
            elementId: 'skills'
        },
        
        // Education & Experience
        {
            id: 'education-content',
            title: 'Education & Experience',
            content: 'Staff Nurse at Tamale Teaching Hospital, Bachelor of Science in Nursing from University of Cape Coast, Rotation Nurse at Tamale Teaching Hospital, Diploma in General Nursing from Nurses and Midwives Training College',
            url: '#education',
            type: 'section',
            sectionId: 'education',
            elementId: 'education'
        },
        
        // Publications
        {
            id: 'publications-content',
            title: 'Publications',
            content: 'Determinants and Mitigating Factors of Brain Drain among Ghanaian Nurses, Assessing the impact of nurses patient safety competencies on key performance indicators (KPIs) for patient safety outcomes at Tamale Teaching Hospital, Patterns and temporal trends in childhood cancer incidence in northern Ghana',
            url: '#publications',
            type: 'section',
            sectionId: 'publications',
            elementId: 'publications'
        },
        
        // Contact
        {
            id: 'contact-content',
            title: 'Contact Information',
            content: 'Email: contact@mudasiribrahim.com, Location: Tamale, Northern Region, Ghana, WhatsApp: +233549343058, YouTube channel for tutorials',
            url: '#contact',
            type: 'section',
            sectionId: 'contact',
            elementId: 'contact'
        }
    ];
    
    // Add all project details for search
    if (typeof allProjects !== 'undefined') {
        allProjects.forEach(project => {
            searchableContent.push({
                id: `project-${project.id}`,
                title: `R Shiny App: ${project.name}`,
                content: project.description,
                url: '#projects',
                type: 'project',
                sectionId: 'projects',
                elementId: `project-${project.id}`,
                projectId: project.id,
                projectName: project.name
            });
        });
    }
    
    // Filter results based on query
    return searchableContent.filter(item => {
        const searchText = (item.title + ' ' + item.content).toLowerCase();
        return searchText.includes(query.toLowerCase());
    });
}

// Fixed function to display search results
function displayResults(results, query) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) {
        console.error('Search results container not found');
        return;
    }
    
    console.log('Displaying results:', results.length);
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <p>No results found for "${query}"</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">Try searching for: research, nursing, R Shiny, publications, contact</p>
            </div>
        `;
        searchResults.classList.add('active');
        return;
    }
    
    let resultsHTML = '';
    results.slice(0, 8).forEach(result => {
        // Highlight search terms in results
        let highlightedContent = result.content;
        let highlightedTitle = result.title;
        
        // Simple highlighting logic
        if (query.length > 2) {
            const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
            highlightedContent = result.content.replace(regex, '<span class="search-highlight">$1</span>');
            highlightedTitle = result.title.replace(regex, '<span class="search-highlight">$1</span>');
        }
        
        resultsHTML += `
            <div class="search-result-item" 
                 data-result-type="${result.type}" 
                 data-section-id="${result.sectionId}" 
                 data-element-id="${result.elementId}"
                 data-project-id="${result.projectId || ''}"
                 data-project-name="${result.projectName || ''}">
                <div class="search-result-title">${highlightedTitle}</div>
                <div class="search-result-content">${highlightedContent}</div>
                <div style="font-size: 0.7rem; color: var(--text-tertiary); margin-top: 0.25rem;">
                    ${result.type === 'project' ? 'Click to view project details' : 'Click to navigate to section'}
                </div>
            </div>
        `;
    });
    
    if (results.length > 8) {
        resultsHTML += `
            <div class="no-results" style="text-align: center; padding: 0.75rem;">
                <p>+ ${results.length - 8} more results</p>
            </div>
        `;
    }
    
    searchResults.innerHTML = resultsHTML;
    searchResults.classList.add('active');
    
    // Add click handlers to search results
    addSearchResultClickHandlers();
}

// Helper function to escape regex special characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Fixed function to add click handlers
function addSearchResultClickHandlers() {
    const searchResultItems = document.querySelectorAll('.search-result-item');
    
    searchResultItems.forEach(item => {
        item.addEventListener('click', function() {
            const resultType = this.getAttribute('data-result-type');
            const sectionId = this.getAttribute('data-section-id');
            const elementId = this.getAttribute('data-element-id');
            const projectId = this.getAttribute('data-project-id');
            const projectName = this.getAttribute('data-project-name');
            
            console.log('Search result clicked:', { resultType, sectionId, elementId, projectId, projectName });
            
            // Close search dropdown
            closeSearch();
            
            // Navigate based on result type
            if (resultType === 'project') {
                navigateToProject(projectId, projectName, sectionId);
            } else {
                navigateToSection(sectionId, elementId);
            }
        });
    });
}

// Fixed navigation functions
function navigateToSection(sectionId, elementId) {
    console.log('Navigating to section:', sectionId, elementId);
    const targetElement = document.getElementById(elementId);
    
    if (targetElement) {
        // Smooth scroll to section
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Add highlight animation after scroll
        setTimeout(() => {
            highlightElement(targetElement, elementId);
        }, 500);
    } else {
        // Fallback to section navigation
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = sectionElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                highlightElement(sectionElement, sectionId);
            }, 500);
        }
    }
}

function navigateToProject(projectId, projectName, sectionId) {
    console.log('Navigating to project:', projectName);
    // First navigate to projects section
    const projectsSection = document.getElementById(sectionId);
    if (projectsSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = projectsSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
    
    // Open the modal after a short delay
    setTimeout(() => {
        const modal = document.getElementById('allProjectsModal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Find and highlight the specific project in the modal
            setTimeout(() => {
                highlightProjectInModal(projectId, projectName);
            }, 300);
        }
    }, 500);
}

function highlightElement(element, elementId) {
    // Remove any previous highlights
    document.querySelectorAll('.search-highlight-animation').forEach(el => {
        el.classList.remove('search-highlight-animation');
    });
    
    // Add highlight animation to the target element
    element.classList.add('search-highlight-animation');
    
    // Remove animation after it completes
    setTimeout(() => {
        element.classList.remove('search-highlight-animation');
    }, 6000);
}

function highlightProjectInModal(projectId, projectName) {
    // Remove any previous modal highlights
    document.querySelectorAll('.modal-project-highlight').forEach(el => {
        el.classList.remove('modal-project-highlight');
    });
    
    // Find the project card in the modal
    const modalProjects = document.querySelectorAll('#allProjectsGrid .project-card');
    let foundProject = null;
    
    // Try to find by project name
    modalProjects.forEach(projectCard => {
        const projectTitle = projectCard.querySelector('h3').textContent;
        if (projectTitle.toLowerCase().includes(projectName.toLowerCase())) {
            foundProject = projectCard;
        }
    });
    
    // If found, highlight it
    if (foundProject) {
        // Scroll the project into view in the modal
        foundProject.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        // Add highlight animation
        foundProject.classList.add('modal-project-highlight');
        
        // Remove animation after it completes
        setTimeout(() => {
            foundProject.classList.remove('modal-project-highlight');
        }, 6000);
    }
}

function closeSearch() {
    const searchDropdown = document.getElementById('searchDropdown');
    const searchResults = document.getElementById('searchResults');
    const searchInput = document.getElementById('searchInput');
    
    if (searchDropdown) searchDropdown.classList.remove('active');
    if (searchResults) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
    }
    if (searchInput) searchInput.value = '';
    
    // Remove any active highlights
    document.querySelectorAll('.search-highlight-animation').forEach(el => {
        el.classList.remove('search-highlight-animation');
    });
    document.querySelectorAll('.modal-project-highlight').forEach(el => {
        el.classList.remove('modal-project-highlight');
    });
}

// Logo click handler to reload website
function initLogoClickHandler() {
    const logoLink = document.getElementById('logoLink');
    
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            
            // Add a small visual feedback
            logoLink.style.transform = 'scale(0.95)';
            logoLink.style.transition = 'transform 0.2s ease';
            
            // Reset the transform after animation
            setTimeout(() => {
                logoLink.style.transform = 'scale(1)';
            }, 200);
            
            // Scroll to top smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Reload the page after a short delay to show the scroll animation
            setTimeout(() => {
                window.location.reload();
            }, 500);
        });
    }
}

// Back to Top Button Functionality - Improved
function initBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position with smooth animation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
            backToTopBtn.style.display = 'inline-flex';
        } else {
            backToTopBtn.classList.remove('visible');
            setTimeout(() => {
                if (window.scrollY <= 500) {
                    backToTopBtn.style.display = 'none';
                }
            }, 300);
        }
    });
    
    // Scroll to top when clicked with smooth animation
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add click animation
        backToTopBtn.style.transform = 'scale(0.95)';
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Reset animation after click
        setTimeout(() => {
            backToTopBtn.style.transform = '';
        }, 200);
    });
    
    // Add hover effect for theme-specific text color
    backToTopBtn.addEventListener('mouseenter', () => {
        // The CSS handles this, but we add a class for extra control
        backToTopBtn.classList.add('hovering');
    });
    
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.classList.remove('hovering');
    });
    
    // Initialize button state
    backToTopBtn.style.display = 'none';
    backToTopBtn.classList.remove('visible');
}

// Minimal Spread Color Mixture Mouse Effect
function initMinimalCursorEffect() {
    // Don't run on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        return;
    }
    
    const paintParticles = [];
    const maxParticles = 8;
    const colorPalette = [
        'rgba(26, 95, 180, 0.15)',   // Blue
        'rgba(98, 160, 234, 0.12)',  // Light Blue
        'rgba(66, 153, 225, 0.1)',   // Sky Blue
        'rgba(34, 139, 230, 0.08)'   // Deep Blue
    ];
    
    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    let moveTimer;
    
    // Create initial particles
    for (let i = 0; i < maxParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'paint-particle';
        particle.style.width = `${Math.random() * 80 + 40}px`;
        particle.style.height = particle.style.width;
        
        // Random color from palette
        const colorIndex = Math.floor(Math.random() * colorPalette.length);
        particle.style.backgroundColor = colorPalette[colorIndex];
        
        document.body.appendChild(particle);
        paintParticles.push({
            element: particle,
            x: 0,
            y: 0,
            size: parseFloat(particle.style.width),
            baseSize: parseFloat(particle.style.width),
            color: colorPalette[colorIndex],
            active: false,
            lifetime: 0
        });
    }
    
    // Update cursor position
    function updateCursor(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isMoving) {
            isMoving = true;
            activateParticles();
        }
        
        clearTimeout(moveTimer);
        moveTimer = setTimeout(() => {
            isMoving = false;
            deactivateParticles();
        }, 150);
        
        // Update particles with slight delay for spread effect
        updateParticles();
    }
    
    function activateParticles() {
        paintParticles.forEach((particle, index) => {
            // Random offset for spread effect
            const angle = (index / paintParticles.length) * Math.PI * 2;
            const distance = Math.random() * 30 + 10;
            const offsetX = Math.cos(angle) * distance;
            const offsetY = Math.sin(angle) * distance;
            
            particle.x = mouseX + offsetX;
            particle.y = mouseY + offsetY;
            particle.active = true;
            particle.lifetime = 0;
            
            // Apply spread effect
            particle.element.style.opacity = '0.3';
            particle.element.style.transform = `translate(-50%, -50%) scale(${1 + Math.random() * 0.3})`;
            particle.element.style.width = `${particle.baseSize * (0.8 + Math.random() * 0.4)}px`;
            particle.element.style.height = particle.element.style.width;
            particle.element.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    }
    
    function deactivateParticles() {
        paintParticles.forEach(particle => {
            particle.active = false;
            particle.element.style.opacity = '0';
            particle.element.style.transform = 'translate(-50%, -50%) scale(0.8)';
            particle.element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    }
    
    function updateParticles() {
        if (!isMoving) return;
        
        paintParticles.forEach((particle, index) => {
            if (particle.active) {
                particle.lifetime += 1;
                
                // Slight movement for fluid effect
                const driftX = Math.sin(particle.lifetime * 0.1 + index) * 2;
                const driftY = Math.cos(particle.lifetime * 0.1 + index) * 2;
                
                // Move particles slightly towards mouse with random spread
                const moveSpeed = 0.15 + Math.random() * 0.1;
                particle.x += (mouseX - particle.x) * moveSpeed + driftX;
                particle.y += (mouseY - particle.y) * moveSpeed + driftY;
                
                // Update particle position
                particle.element.style.left = `${particle.x}px`;
                particle.element.style.top = `${particle.y}px`;
                
                // Gentle pulsing effect
                const pulseScale = 1 + Math.sin(particle.lifetime * 0.05) * 0.05;
                particle.element.style.transform = `translate(-50%, -50%) scale(${pulseScale})`;
                
                // Color variation over time
                if (particle.lifetime % 30 === 0) {
                    const newColorIndex = Math.floor(Math.random() * colorPalette.length);
                    particle.element.style.backgroundColor = colorPalette[newColorIndex];
                    particle.color = colorPalette[newColorIndex];
                }
            }
        });
        
        // Continue animation
        if (isMoving) {
            requestAnimationFrame(updateParticles);
        }
    }
    
    // Click effect - more pronounced spread
    function handleClick() {
        paintParticles.forEach((particle, index) => {
            if (!particle.active) return;
            
            // Explosive spread on click
            const angle = (index / paintParticles.length) * Math.PI * 2;
            const distance = Math.random() * 50 + 30;
            const offsetX = Math.cos(angle) * distance;
            const offsetY = Math.sin(angle) * distance;
            
            particle.x += offsetX;
            particle.y += offsetY;
            particle.element.style.transform = `translate(-50%, -50%) scale(${1.5 + Math.random() * 0.5})`;
            particle.element.style.opacity = '0.5';
            particle.element.style.filter = 'blur(30px) brightness(1.8)';
            particle.element.classList.add('glow');
            
            // Return to normal after click
            setTimeout(() => {
                particle.element.classList.remove('glow');
                particle.element.style.filter = '';
                particle.element.style.opacity = '0.3';
            }, 300);
        });
    }
    
    // Event listeners
    document.addEventListener('mousemove', updateCursor);
    
    // Hide particles when mouse leaves window
    document.addEventListener('mouseleave', () => {
        isMoving = false;
        deactivateParticles();
    });
    
    document.addEventListener('mouseenter', () => {
        if (mouseX !== 0 || mouseY !== 0) {
            isMoving = true;
            activateParticles();
        }
    });
    
    // Click effect
    document.addEventListener('click', handleClick);
    
    // Initialize particles at current mouse position
    setTimeout(() => {
        // Check if mouse is already in position
        if (mouseX !== 0 || mouseY !== 0) {
            isMoving = true;
            activateParticles();
        }
    }, 1000);
}

// Typing Effect Functionality - ONLY types up to the quote section
function initTypingEffect() {
    // Text content to type (only up to quote section)
    const typingContent = {
        badge: "Core Philosophy",
        heading: "Building open, accessible data tools that advance healthcare for all.",
        subtitle: "Mudasir Mohammed Ibrahim | Registered General Nurse",
        quote: {
            text: "Innovation distinguishes between a leader and a follower.",
            author: "— Steve Jobs"
        }
    };
    
    // DOM elements
    const badgeText = document.getElementById('badge-text');
    const heading = document.getElementById('typing-heading');
    const subtitle = document.getElementById('typing-subtitle');
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const introText = document.getElementById('intro-text');
    
    // Typing speed configuration
    const typingSpeed = {
        badge: 30,      // ms per character
        heading: 40,
        subtitle: 35,
        quoteText: 30,
        quoteAuthor: 40
    };
    
    // Delay between sections
    const sectionDelay = {
        afterBadge: 300,
        afterHeading: 400,
        afterSubtitle: 300,
        afterQuote: 500
    };
    
    // Typing function
    function typeText(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = '';
        
        function typeCharacter() {
            if (i < text.length) {
                // Add cursor effect
                element.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor">|</span>';
                i++;
                setTimeout(typeCharacter, speed);
            } else {
                // Remove cursor when done
                element.innerHTML = text;
                if (callback) callback();
            }
        }
        
        typeCharacter();
    }
    
    // Start the typing sequence - ONLY types up to quote
    function startTypingSequence() {
        // Reset typed elements to empty
        badgeText.innerHTML = '';
        heading.innerHTML = '';
        subtitle.innerHTML = '';
        quoteText.innerHTML = '';
        quoteAuthor.innerHTML = '';
        
        // Show introduction content immediately (no typing)
        introText.innerHTML = "Hi! I'm Mudasir Mohammed Ibrahim, a healthcare professional and data enthusiast. In my free time, I develop accessible R Shiny web applications to make complex analyses easier and more intuitive for healthcare professionals, students, and researchers. You can find all of them here.";
        
        // Show highlight points immediately
        const highlightItems = document.querySelectorAll('.highlight-item');
        highlightItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transition = 'opacity 0.5s ease';
        });
        
        // Fade in badge container
        const badgeContainer = document.getElementById('typing-badge');
        badgeContainer.style.opacity = '1';
        badgeContainer.style.transition = 'opacity 0.5s ease';
        
        // Start typing badge text
        setTimeout(() => {
            typeText(badgeText, typingContent.badge, typingSpeed.badge, () => {
                // Fade in and type heading
                setTimeout(() => {
                    const headingElement = document.getElementById('typing-heading');
                    headingElement.style.opacity = '1';
                    headingElement.style.transition = 'opacity 0.5s ease';
                    
                    typeText(heading, typingContent.heading, typingSpeed.heading, () => {
                        // Fade in and type subtitle
                        setTimeout(() => {
                            const subtitleElement = document.getElementById('typing-subtitle');
                            subtitleElement.style.opacity = '1';
                            subtitleElement.style.transition = 'opacity 0.5s ease';
                            
                            typeText(subtitle, typingContent.subtitle, typingSpeed.subtitle, () => {
                                // Fade in and type quote
                                setTimeout(() => {
                                    const quoteElement = document.getElementById('typing-quote');
                                    quoteElement.style.opacity = '1';
                                    quoteElement.style.transition = 'opacity 0.5s ease';
                                    
                                    typeText(quoteText, typingContent.quote.text, typingSpeed.quoteText, () => {
                                        // Type quote author
                                        setTimeout(() => {
                                            typeText(quoteAuthor, typingContent.quote.author, typingSpeed.quoteAuthor, () => {
                                                // AFTER QUOTE IS DONE, SHOW EVERYTHING ELSE IMMEDIATELY
                                                setTimeout(() => {
                                                    // Show introduction section immediately
                                                    const introElement = document.getElementById('typing-intro');
                                                    introElement.style.opacity = '1';
                                                    introElement.style.transition = 'opacity 0.3s ease';
                                                    
                                                    // Show social icons immediately
                                                    const socialIcons = document.getElementById('social-icons');
                                                    socialIcons.style.opacity = '1';
                                                    socialIcons.style.transition = 'opacity 0.3s ease';
                                                    
                                                    // Show CTA buttons immediately
                                                    const ctaButtons = document.getElementById('cta-buttons');
                                                    ctaButtons.style.opacity = '1';
                                                    ctaButtons.style.transition = 'opacity 0.3s ease';
                                                }, 300);
                                            });
                                        }, 500);
                                    });
                                }, sectionDelay.afterSubtitle);
                            });
                        }, sectionDelay.afterHeading);
                    });
                }, sectionDelay.afterBadge);
            });
        }, 500); // Initial delay before starting
    }
    
    // Add CSS for typing cursor
    const style = document.createElement('style');
    style.textContent = `
        .typing-cursor {
            color: var(--accent);
            font-weight: bold;
            animation: blink 0.7s infinite;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        /* Make sure the intro and following sections are initially hidden */
        #typing-intro,
        #social-icons,
        #cta-buttons {
            opacity: 0;
        }
        
        /* But they should fade in quickly after quote is done */
        #typing-intro,
        #social-icons,
        #cta-buttons {
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Start typing effect when page loads
    window.addEventListener('load', startTypingSequence);
    
    // Restart typing effect when logo is clicked (page reload)
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            // Only restart if we're already on the home page
            if (window.location.hash === '' || window.location.hash === '#home') {
                e.preventDefault();
                startTypingSequence();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
}

// Function to color the name dynamically
function colorNameSeparately() {
    const logo = document.getElementById('logoLink');
    if (!logo) return;
    
    // Get the text content
    const fullName = logo.textContent.trim();
    
    // Find where the space is
    const spaceIndex = fullName.indexOf(' ');
    
    if (spaceIndex > 0) {
        const firstName = fullName.substring(0, spaceIndex);
        const lastName = fullName.substring(spaceIndex + 1);
        
        // Create colored spans
        logo.innerHTML = `
            <span class="first-part">${firstName}</span>
            <span class="name-space"> </span>
            <span class="last-part">${lastName}</span>
        `;
    }
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    colorNameSeparately();
    
    // Also call it when logo is clicked (since you have reload functionality)
    const logo = document.getElementById('logoLink');
    if (logo) {
        const originalClick = logo.onclick;
        logo.onclick = function(e) {
            // Reapply coloring after a short delay when logo is clicked
            setTimeout(colorNameSeparately, 100);
            if (originalClick) originalClick.call(this, e);
        };
    }
});