# replit.md

## Overview

This project is a personal portfolio website for Kunal Garud, a Creative Director and video editor. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on creating a cinematic, scroll-based experience with smooth animations and modern UI components.

## System Architecture

The application follows a monorepo structure with clear separation between client-side and server-side code:

- **Frontend**: React-based single-page application using Vite as the build tool
- **Backend**: Express.js server with minimal API endpoints (currently serving static files)
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth, Apple-style animations
- **Development**: TypeScript for type safety across the entire stack

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for the main UI framework
- **Vite** for fast development and optimized builds
- **React Router (Wouter)** for client-side routing
- **TanStack React Query** for server state management
- **Framer Motion** for animations and scroll-based interactions
- **Tailwind CSS** with custom theme variables for consistent styling
- **Radix UI** components for accessible, unstyled primitives

### Backend Architecture
- **Express.js** server with TypeScript support
- **Drizzle ORM** with PostgreSQL dialect for database operations
- **Neon Database** as the cloud PostgreSQL provider
- **Session management** with connect-pg-simple for PostgreSQL-backed sessions
- **ESM modules** throughout the application for modern JavaScript support

### Database Schema
- Currently includes a basic users table with id, username, and password fields
- Uses Drizzle ORM with Zod schema validation
- Configured for PostgreSQL with migration support

### UI/UX Design
- **Dark theme** with black background and red-orange accent gradients
- **Cinematic scroll-based** layout with multiple sections
- **Glass morphism** effects for modern visual appeal
- **Responsive design** with mobile-first approach
- **Custom animations** using Framer Motion for smooth transitions

## Data Flow

1. **Client-side rendering** with React handling all UI interactions
2. **Static asset serving** through Vite in development and Express in production
3. **API communication** using fetch with React Query for caching and state management
4. **Database operations** through Drizzle ORM with type-safe queries
5. **Session management** for user authentication (when implemented)

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Cloud PostgreSQL database connection
- **drizzle-orm**: Type-safe database operations
- **framer-motion**: Animation library for smooth UI transitions
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight client-side routing

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Icon library for consistent iconography

### Development Dependencies
- **vite**: Fast build tool with HMR support
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production builds
- **drizzle-kit**: Database migration and schema management

## Deployment Strategy

The application is designed for deployment on platforms like Replit, Vercel, or similar services:

1. **Build Process**: 
   - Frontend built with Vite to `dist/public`
   - Backend bundled with esbuild to `dist/index.js`
   - Single deployment artifact with static file serving

2. **Environment Variables**:
   - `DATABASE_URL`: PostgreSQL connection string
   - `NODE_ENV`: Environment mode (development/production)

3. **Production Setup**:
   - Express server serves both API routes and static files
   - Database migrations run via `drizzle-kit push`
   - Session storage backed by PostgreSQL

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```