# Telegram Web Clone

A beautiful, responsive Telegram Web clone UI built with HTML, CSS, and JavaScript. This project demonstrates a modern chat interface inspired by Telegram's design.

![Telegram Web Clone](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Modern Dark Theme** - Beautiful dark color scheme inspired by Telegram
- 💬 **Chat Interface** - Real-time chat UI with message bubbles
- 👥 **Chat List** - Sidebar with contact/group list
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🔍 **Search Functionality** - Filter chats by name or message
- 📝 **Message Input** - Auto-resizing textarea with emoji support
- 🏷️ **Chat Tabs** - Filter chats by type (All, Personal, Groups, Channels)
- 🎯 **Online Indicators** - Show online status for contacts
- 💬 **Message Bubbles** - Distinguish between sent and received messages
- ⏰ **Timestamps** - Message time display
- 🔔 **Unread Badges** - Visual indicator for unread messages

## 🚀 Live Demo

Visit the deployed version: **[Telegram Web Clone](https://arg9244.github.io/telegram-web-clone/)**

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript** - Interactive features
- **GitHub Pages** - Free static site hosting

## 📁 Project Structure

```
telegram-web-clone/
├── index.html    # Main HTML file with complete UI
└── README.md     # This file
```

## 🎯 Key Design Elements

### Color Palette
- **Primary Background**: #0e1014
- **Secondary Background**: #17212b
- **Accent Color**: #2aabf5 (Telegram blue)
- **Text Colors**: White and muted grays

### UI Components
1. **Sidebar**
   - Menu button
   - Search bar
   - Chat type tabs
   - Scrollable chat list

2. **Main Chat Area**
   - Chat header with avatar and status
   - Action buttons (call, video, search, menu)
   - Messages container
   - Message input area

3. **Message Bubbles**
   - Received messages: Dark gray background
   - Sent messages: Telegram blue background
   - Rounded corners with characteristic tails

## 📱 Responsive Design

The interface is fully responsive and adapts to different screen sizes:
- **Desktop (>900px)**: Full sidebar + chat view
- **Mobile (<900px)**: Sidebar only (tap to view chat)

## 🎨 Customization

### CSS Variables
The design uses CSS variables for easy customization:

```css
:root {
    --bg-primary: #0e1014;
    --bg-secondary: #17212b;
    --accent: #2aabf5;
    /* ... more variables */
}
```

### Modifying Colors
Simply edit the CSS variables in the `:root` selector to change the color scheme.

## 🔧 JavaScript Features

1. **Auto-resize Textarea** - Automatically adjusts height as you type
2. **Send Messages** - Press Enter or click send button
3. **Search Filtering** - Real-time chat list filtering
4. **Tab Switching** - Filter chats by type
5. **Chat Selection** - Click to select different chats

## 📦 Deployment

This project is deployed using GitHub Pages:

1. **Repository**: `arg9244/telegram-web-clone`
2. **Branch**: `main`
3. **URL**: https://arg9244.github.io/telegram-web-clone/

### Manual Deployment Steps
```bash
# Clone the repository
git clone https://github.com/arg9244/telegram-web-clone.git
cd telegram-web-clone

# Create index.html and README.md
# Enable GitHub Pages in repository settings
```

## 🤝 Contributing

Feel free to contribute to this project! Here are some ideas:

1. Add more features (typing indicators, read receipts, etc.)
2. Implement actual backend with WebSocket support
3. Add more themes (light mode, custom colors)
4. Improve accessibility
5. Add animations and transitions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Telegram** - For the beautiful design inspiration
- **GitHub Pages** - For free hosting
- **Open Source Community** - For the tools and resources

## 📞 Contact

- **GitHub**: [@arg9244](https://github.com/arg9244)
- **Project Link**: https://github.com/arg9244/telegram-web-clone

---

⭐ **Star this repository if you found it helpful!**
