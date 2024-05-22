const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
    for (const item of faqItems) {
        const onClick = () => {
            item.classList.toggle('active');
        }
        item.addEventListener('click', onClick);
    }

    // Tooltip feature script
    document.querySelectorAll('.tooltip').forEach(function(tooltip) {
        tooltip.addEventListener('mouseover', function() {
            const tooltipText = this.querySelector('.tooltiptext');
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = '1';
        });

        tooltip.addEventListener('mouseout', function() {
            const tooltipText = this.querySelector('.tooltiptext');
            tooltipText.style.visibility = 'hidden';
            tooltipText.style.opacity = '0';
        });
    });

    // "Learn More" button script
    const learnMoreBtn = document.getElementById('learn-more-btn');
    learnMoreBtn.addEventListener('click', function() {
        alert('Thank you for your interest! More information will be available soon.');
    });
