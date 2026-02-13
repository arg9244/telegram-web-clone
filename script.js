// Telegram Web Clone - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.querySelector('.message-input');
    const sendBtn = document.querySelector('.send-btn');
    const messagesList = document.querySelector('.messages-list');
    const chatItems = document.querySelectorAll('.chat-item');
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    // Auto-resize textarea
    messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
    });
    
    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);
    
    // Send message on Enter (without Shift)
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    function sendMessage() {
        const text = messageInput.value.trim();
        if (!text) return;
        
        const messageHTML = `
            <div class="message sent">
                <div class="message-content">
                    <p class="message-text">${escapeHtml(text)}</p>
                    <div class="message-meta">
                        <span class="message-time">${getCurrentTime()}</span>
                        <span class="message-status">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor" d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        `;
        
        messagesList.insertAdjacentHTML('beforeend', messageHTML);
        messageInput.value = '';
        messageInput.style.height = 'auto';
        
        // Scroll to bottom
        scrollToBottom();
        
        // Simulate reply after 1-2 seconds
        setTimeout(simulateReply, 1000 + Math.random() * 1000);
    }
    
    function simulateReply() {
        const replies = [
            "That's great! 🎉",
            "Thanks for letting me know!",
            "Looks good to me 👍",
            "I'll take a look at it",
            "Great work on that!",
            "Awesome! 🚀",
            "Perfect timing!",
            "Let me check and get back to you"
        ];
        
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        
        const replyHTML = `
            <div class="message received">
                <div class="avatar small">
                    <img src="https://ui-avatars.com/api/?name=Sarah&background=7CB342&color=fff" alt="Sarah">
                </div>
                <div class="message-content">
                    <p class="message-text">${randomReply}</p>
                    <div class="message-meta">
                        <span class="message-time">${getCurrentTime()}</span>
                    </div>
                </div>
            </div>
        `;
        
        messagesList.insertAdjacentHTML('beforeend', replyHTML);
        scrollToBottom();
    }
    
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    function scrollToBottom() {
        messagesList.parentElement.scrollTop = messagesList.parentElement.scrollHeight;
    }
    
    // Chat item click handler
    chatItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            chatItems.forEach(chat => chat.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
            
            // Update chat title
            const chatName = item.querySelector('.chat-name').textContent;
            document.querySelector('.chat-title-name').textContent = chatName;
            
            // Clear messages and show initial message
            messagesList.innerHTML = `
                <div class="message-group">
                    <div class="message received">
                        <div class="avatar small">
                            <img src="https://ui-avatars.com/api/?name=System&background=8774e1&color=fff" alt="System">
                        </div>
                        <div class="message-content">
                            <p class="message-text">Chat started. Say hello!</p>
                            <div class="message-meta">
                                <span class="message-time">${getCurrentTime()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    });
    
    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        chatItems.forEach(item => {
            const chatName = item.querySelector('.chat-name').textContent.toLowerCase();
            const preview = item.querySelector('.message-text').textContent.toLowerCase();
            
            if (chatName.includes(searchTerm) || preview.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Initial scroll to bottom
    scrollToBottom();
});

// Add some animated background particles
function createParticles() {
    const container = document.querySelector('.messages-container');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(34, 153, 217, ${Math.random() * 0.1 + 0.05});
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 20 + 10}s linear infinite;
        `;
        container.appendChild(particle);
    }
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles after a short delay
setTimeout(createParticles, 1000);
