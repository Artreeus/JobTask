document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const navButtons = document.getElementById('navButtons');
  
  // Apply responsive styles based on screen size
  function applyResponsiveStyles() {
    if (window.innerWidth <= 768) {
      // Mobile view styles
      mobileMenuToggle.style.display = 'block';
      
      // Only hide nav elements if menu is not active
      if (!mobileMenuToggle.classList.contains('active')) {
        navLinks.style.display = 'none';
        navButtons.style.display = 'none';
      }
      
      // Set mobile position for menu when active
      navLinks.style.position = 'absolute';
      navLinks.style.flexDirection = 'column';
      navLinks.style.top = '70px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.backgroundColor = '#fff';
      navLinks.style.padding = '20px';
      navLinks.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
      navLinks.style.textAlign = 'center';
      navLinks.style.gap = '15px';
      
      navButtons.style.position = 'absolute';
      navButtons.style.flexDirection = 'column';
      navButtons.style.top = navLinks.offsetHeight + 70 + 'px';
      navButtons.style.left = '0';
      navButtons.style.width = '100%';
      navButtons.style.backgroundColor = '#fff';
      navButtons.style.padding = '0 20px 20px 20px';
      navButtons.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
      navButtons.style.textAlign = 'center';
      
      // Apply even smaller screen styles
      if (window.innerWidth <= 480) {
        document.querySelector('img').style.height = '30px';
        const buttons = navButtons.querySelectorAll('button');
        buttons.forEach(button => {
          button.style.width = '100%';
          button.style.marginTop = '5px';
        });
      }
    } else {
      // Desktop view styles
      mobileMenuToggle.style.display = 'none';
      navLinks.style.display = 'flex';
      navLinks.style.position = 'static';
      navLinks.style.flexDirection = 'row';
      navLinks.style.padding = '0';
      navLinks.style.boxShadow = 'none';
      navLinks.style.backgroundColor = 'transparent';
      navLinks.style.width = 'auto';
      navLinks.style.gap = '25px';
      
      navButtons.style.display = 'flex';
      navButtons.style.position = 'static';
      navButtons.style.flexDirection = 'row';
      navButtons.style.padding = '0';
      navButtons.style.boxShadow = 'none';
      navButtons.style.backgroundColor = 'transparent';
      navButtons.style.width = 'auto';
    }
  }
  
  // Initial application of styles
  applyResponsiveStyles();
  
  // Toggle menu functionality
  mobileMenuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    
    if (this.classList.contains('active')) {
      // Menu open - show nav elements and apply hamburger animation
      navLinks.style.display = 'flex';
      navButtons.style.display = 'flex';
      this.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 6px)';
      this.querySelector('span:nth-child(2)').style.opacity = '0';
      this.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
      // Menu closed - hide nav elements and reset hamburger
      navLinks.style.display = 'none';
      navButtons.style.display = 'none';
      this.querySelector('span:nth-child(1)').style.transform = 'none';
      this.querySelector('span:nth-child(2)').style.opacity = '1';
      this.querySelector('span:nth-child(3)').style.transform = 'none';
    }
  });
  
  // Close mobile menu when clicking on links
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        mobileMenuToggle.classList.remove('active');
        navLinks.style.display = 'none';
        navButtons.style.display = 'none';
        
        // Reset hamburger icon
        mobileMenuToggle.querySelector('span:nth-child(1)').style.transform = 'none';
        mobileMenuToggle.querySelector('span:nth-child(2)').style.opacity = '1';
        mobileMenuToggle.querySelector('span:nth-child(3)').style.transform = 'none';
      }
    });
  });
  
  // Handle window resize
  window.addEventListener('resize', applyResponsiveStyles);
  
  // Add hover effect to links
  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.color = '#4a90e2';
    });
    link.addEventListener('mouseleave', function() {
      this.style.color = '#333';
    });
  });
  
  // Add hover effects to buttons
  const buttons = navButtons.querySelectorAll('button');
  buttons[0].addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'rgba(74, 144, 226, 0.1)';
  });
  buttons[0].addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'transparent';
  });
  
  buttons[1].addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#3a7bc8';
  });
  buttons[1].addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#4a90e2';
  });
});
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabImage = document.querySelector('.tab-image');

const tabImages = {
  designers: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80',
  developers: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
  managers: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80'
};

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Update image
    const tabId = button.dataset.tab;
    tabImage.style.opacity = '0';
    
    setTimeout(() => {
      tabImage.src = tabImages[tabId];
      tabImage.style.opacity = '1';
    }, 300);
  });
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    
    const answer = button.nextElementSibling;
    answer.hidden = expanded;
    
    // Close other open answers
    if (!expanded) {
      document.querySelectorAll('.faq-question[aria-expanded="true"]').forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherButton.nextElementSibling.hidden = true;
        }
      });
    }
  });
});

 document.querySelector('.scroll-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });