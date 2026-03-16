1. Product Overview

- This project aims to build a simple and stable personal introduction webpage that presents profile information, interests, technical skills, and allows visitors to leave messages through a guestbook feature.

- The webpage must be deployed via Vercel and accessible publicly.

- The focus is on: Stability, Clean and minimal design, Simple architecture, Low implementation risk


2. Scope

- The application must be a Single Page Application.

- Routing is not required.

- The following features must be implemented: Profile Section, Interest Section, Tech Stack Section, Dark Mode Toggle, Guestbook (Supabase Integration), 
Social Links Section

- No additional features should be implemented.


3. Information Architecture

- The page layout must follow this vertical structure: Profile Section (Hero), Interest & Tech Stack Section, Guestbook Section, Social Links Footer

- All sections must be centered with a maximum width container.


4. Profile Section
- Purpose : To introduce the owner of the page clearly at first view.

- UI Elements: Profile Image (circular avatar), Name or Nickname, One-line introduction, Short paragraph description

- UX Requirements: Section must be vertically centered on first load/ Layout must be stacked on mobile/ Image must be displayed above text on small screens/ Smooth fade-in animation when section appears


5. Interest Section
- Purpose: To communicate main areas of interest.

- UI Requirements: Card-based layout/ Grid layout with 2 columns on desktop/ Single column on mobile/ Hover effect: subtle shadow or scale

- Each card contains: Icon or emoji/ Interest title

- No complex animation should be used.


6. Tech Stack Section
Purpose: To show technologies the owner is familiar with.

- UI Requirements: Badge style UI/ Grouped or simple inline layout/ Consistent spacing/ Hover tooltip is optional but not required

- Tech stack must be displayed using simple reusable badge components.


7. Guestbook Section (Supabase)
- Purpose: Visitors can leave short messages.

- Functional Requirements
Input field: Name (text)
Input field: Message (textarea)
Submit button
Guestbook list display

- Behavior
On submit → data inserted into Supabase
After successful insert → input fields cleared
Guestbook list refreshed by fetching data again
Latest messages must appear first
No real-time subscription required

- Loading and Error Handling
Submit button must be disabled while submitting
Loading indicator must be shown
Error message must be displayed if submission fails
Empty state UI must be displayed if there are no messages

- Supabase Table Schema
Table name: guestbook
Columns:
id (uuid, primary key)
name (text)
message (text)
created_at (timestamp, default now)

Row Level Security may be disabled for simplicity.


8. Dark Mode Toggle
- Requirements
Toggle button must switch between light and dark theme
Theme preference must be stored in localStorage
Tailwind dark class strategy must be used
next-themes library should be used for stability


9. Social Links Section
- Purpose: To provide quick access to external profiles.

- Required Links: GitHub, Email (mailto link), Instagram

- UI Requirements
Icon button style
Horizontal alignment
Hover opacity effect
Open links in new tab


10. Responsive Requirements

Desktop: comfortable reading width (max-w container)

Tablet: reduced spacing

Mobile: full width stacked layout

All interactive elements must remain usable on small screens


11. Design Guidelines

Minimal design with sufficient whitespace

One primary accent color

Rounded card corners

Medium shadow level

Consistent vertical spacing between sections

Avoid complex gradients or heavy animations

Fade-in animation is allowed only when sections enter viewport.


12. Technical Stack

Next.js (App Router)

TypeScript

Tailwind CSS

Supabase JS Client

next-themes

Optional: Framer Motion for simple fade animation



13. Component Structure (Recommended)

ProfileSection

InterestSection

TechStackSection

Guestbook

GuestbookForm

GuestbookList

DarkModeToggle

SocialLinks

ContainerLayout



14. Data Fetching Strategy

Guestbook messages fetched on component mount (client-side)

Re-fetch after successful insert

No server actions required

Simple async fetch logic preferred



15. Deployment Requirement

Must be deployed on Vercel

Environment variables must be configured for Supabase

Page must load without runtime errors