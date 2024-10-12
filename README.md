# Miro Clone - Collaborative Whiteboard App

This is a Miro clone, a collaborative whiteboard application that allows users to create, edit, and collaborate on boards in real-time. The project is built with **Next.js**, **TypeScript**, **Liveblocks**, **Convex**, and **Clerk** for user authentication.

## Features

- 🖌 **Real-time collaboration**: Multiple users can create and edit boards simultaneously, with changes reflected instantly for everyone.
- 🔒 **User Authentication**: Powered by Clerk, users can sign up, log in, and manage their profiles.
- 📊 **Persistent Data**: Boards and user data are stored persistently using Convex as a real-time backend.
- ⚡ **Real-time presence**: Track active users and see who is currently working on the same board using Liveblocks.
- 🚀 **Next.js**: Frontend framework providing fast and responsive UI, server-side rendering, and API routes.
- 💻 **TypeScript**: Strong typing and improved developer experience.

## Tech Stack

- **Next.js**: The frontend framework used for the UI and routing.
- **TypeScript**: For type safety and better code maintainability.
- **Liveblocks**: Real-time collaboration, presence, and storage management.
- **Convex**: A real-time database and backend that stores and syncs data across users.
- **Clerk**: Handles user authentication (sign-up, log-in, profile management, etc.).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [Clerk Account](https://clerk.dev/)
- [Convex Account](https://convex.dev/)
- [Liveblocks Account](https://liveblocks.io/)

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/miro-clone.git
   cd miro-clone
2. Install dependencies
   ```bash
   npm install
3. Create .env.local
   ```bash
   NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
   CLERK_API_KEY=your-clerk-api-key
   CONVEX_DEPLOY_KEY=your-convex-deploy-key
   NEXT_PUBLIC_CONVEX_URL=your-convex-url
   LIVEBLOCKS_PUBLIC_KEY=your-liveblocks-public-key
4. Run the app
   ```bash
   npm run dev


