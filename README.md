# 📝 Next.js Blog Theme (App Router)

A modern, **responsive**, and **highly customizable** blog theme built with **Next.js App Router** and **TypeScript**. Perfect for content creators, developers, and businesses looking for an efficient and sleek blogging solution. This theme focuses on **performance**, **scalability**, and **seamless user experience**.

---

## 🚀 Features

- **Dynamic Blog Pages**: Easily customizable and dynamic blog post pages with clean URLs (`/posts/[id]`).
- **Multi-Section Homepage**: Flexible homepage layout with multiple engaging content sections (`FirstSection`, `SecondSection`, `ThirdSection`).
- **Pre-built Static Pages**: Ready-to-use static pages such as About, Authors, and Contact.
- **App Router + TypeScript**: Leverage Next.js App Router for scalable routing, combined with TypeScript for enhanced type safety and maintainable code.
- **Reusable Components**: Modular and reusable components like `Header` and `Footer`.
- **Fully Responsive Design**: Optimized for both mobile and desktop devices, ensuring your content looks great on all screen sizes.
- **Logo Support**: Support for both light and dark logos (`logo-dark.png` and `logo-light.png`).
- **Customizable CSS**: Includes `style.css` for specific design tweaks and `globals.css` for global, application-wide styling.
- **Font Integration**: Easily integrate custom fonts, including **Work Sans**. Simply place the font files in the `app/fonts/` directory and reference them in your CSS for seamless integration.
- **SEO-Optimized**: Clean, semantic HTML with customizable meta tags to improve search engine performance.

---

## 📁 Project Structure

```bash
app/
├── layout.tsx              # Main layout for the application
├── page.tsx                # Homepage
├── about/page.tsx          # About page
├── authors/[id]/page.tsx   # Dynamic author page (for individual authors)
├── contact/page.tsx        # Contact page
├── posts/[id]/page.tsx     # Individual blog post detail page
├── not-found.ts            # Custom 404 error page
├── globals.css             # Global CSS for consistent styling across the app
├── style.css               # Custom CSS for specific design customizations
├── fonts/                  # Custom font assets
│   ├── WorkSans-Regular.ttf
│   ├── WorkSans-Medium.ttf
│   ├── WorkSans-SemiBold.ttf
│   ├── WorkSans-Bold.ttf
└── favicon.ico             # Favicon for the website

components/
├── Header.tsx              # Header component with navigation
├── Footer.tsx              # Footer component with site information
├── FirstSection.tsx        # First section of the homepage
├── SecondSection.tsx       # Second section of the homepage
├── ThirdSection.tsx        # Third section of the homepage

public/
├── images/                 # Static image assets
│   ├── logo-dark.png       # Dark logo version
│   └── logo-light.png      # Light logo version
