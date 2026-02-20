# BitRocket Store - The Rondo

## Overview
The BitRocket Store now features "The Rondo" - an innovative egg-shaped airborne aerodynamic vehicle with a stunning 3D vertical scroll experience.

## Features Implemented

### 1. Store Landing Page (`/store`)
- Featured product showcase for The Rondo
- Cyberpunk-themed design matching the BitRocket aesthetic
- Direct navigation to The Rondo product page
- Responsive layout with gradient effects and animations

### 2. The Rondo Product Page (`/store/rondo`)
- **3D Vertical Scroll Animation**: The egg-shaped vehicle rotates in 3D space as you scroll
  - RotateX: Tilts forward and backward
  - RotateY: Full 720° rotation (2 complete spins)
  - RotateZ: Subtle roll effect
  - Scale: Dynamic sizing from 0.6x to 1.4x
  - Opacity: Fades in and out
  - Y-axis translation: Vertical movement
  
- **Specifications Section**: Key features displayed in animated cards
  - Aerodynamic design (0.18 drag coefficient)
  - Electric VTOL capability
  - Top speed: 320 km/h
  - AI-assisted flight control

- **Video Section**: Placeholder for 3D animation/video content

- **CTA Section**: Pre-order and brochure download options

### 3. Navigation Integration
- Added "Store" link to the main site header navigation
- Positioned between "Pricing" and "Find a Charger"

## Design Elements

### Visual Style
- Egg-shaped vehicle with gradient colors (purple → cyan → blue)
- Cockpit window with translucent effect
- Detail lines for aerodynamic appearance
- Neon glow effects and pulsing animations
- Cyberpunk grid overlays

### Color Palette
- Primary: Purple (#9333EA) to Cyan (#06B6D4)
- Accents: Blue (#3B82F6), Fuchsia (#D946EF)
- Background: Black with gradient overlays

### Animations
- Framer Motion for smooth 3D transforms
- Scroll-based parallax effects
- Hover states on interactive elements
- Pulsing glow effects

## Technical Implementation

### Technologies Used
- Next.js 14 (App Router)
- TypeScript
- Framer Motion (scroll animations)
- Tailwind CSS
- Radix UI components

### Key Files
- `/app/store/page.tsx` - Store landing page
- `/app/store/rondo/page.tsx` - The Rondo product page
- `/app/store/loading.tsx` - Store loading state
- `/app/store/rondo/loading.tsx` - Product loading state
- `/components/site-header.tsx` - Updated with Store link

## Future Enhancements

1. **3D Model Integration**: Replace CSS-based egg shape with actual 3D model (Three.js/React Three Fiber)
2. **Video Content**: Add promotional video showcasing The Rondo in flight
3. **Photo Gallery**: Multiple angles and interior shots
4. **Configurator**: Allow users to customize colors and features
5. **Pre-order System**: Integrate with payment processing
6. **AR Preview**: View The Rondo in augmented reality
7. **Additional Products**: Expand store with more vehicles and accessories

## Usage

Navigate to `/store` to view the store landing page, then click "Explore The Rondo" to experience the 3D scroll animation on the product page.

The page is fully responsive and optimized for both desktop and mobile viewing.
