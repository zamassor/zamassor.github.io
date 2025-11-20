#!/usr/bin/env python3
"""
Generate favicon files from the existing logo.png
Requires: Pillow (PIL)
Install with: pip install Pillow
"""

from PIL import Image
import os

def generate_favicons():
    # Load the original logo
    logo_path = 'img/logo.png'
    if not os.path.exists(logo_path):
        print(f"Error: {logo_path} not found!")
        return
    
    logo = Image.open(logo_path)
    
    # Convert to RGBA if needed
    if logo.mode != 'RGBA':
        logo = logo.convert('RGBA')
    
    # Generate favicon.ico (16x16 and 32x32 combined)
    favicon_sizes = [(16, 16), (32, 32), (48, 48)]
    favicon_images = []
    
    for size in favicon_sizes:
        resized = logo.resize(size, Image.Resampling.LANCZOS)
        favicon_images.append(resized)
    
    # Save as .ico file
    favicon_images[0].save(
        'favicon.ico',
        format='ICO',
        sizes=favicon_sizes
    )
    print("✓ Created favicon.ico (16x16, 32x32, 48x48)")
    
    # Generate apple-touch-icon.png (180x180)
    apple_icon = logo.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save('apple-touch-icon.png', 'PNG')
    print("✓ Created apple-touch-icon.png (180x180)")
    
    # Generate favicon-32x32.png
    favicon_32 = logo.resize((32, 32), Image.Resampling.LANCZOS)
    favicon_32.save('favicon-32x32.png', 'PNG')
    print("✓ Created favicon-32x32.png (32x32)")
    
    # Generate favicon-16x16.png
    favicon_16 = logo.resize((16, 16), Image.Resampling.LANCZOS)
    favicon_16.save('favicon-16x16.png', 'PNG')
    print("✓ Created favicon-16x16.png (16x16)")
    
    # Generate android-chrome icons
    android_192 = logo.resize((192, 192), Image.Resampling.LANCZOS)
    android_192.save('android-chrome-192x192.png', 'PNG')
    print("✓ Created android-chrome-192x192.png (192x192)")
    
    android_512 = logo.resize((512, 512), Image.Resampling.LANCZOS)
    android_512.save('android-chrome-512x512.png', 'PNG')
    print("✓ Created android-chrome-512x512.png (512x512)")
    
    print("\n✅ All favicon files generated successfully!")
    print("\nNext steps:")
    print("1. Update your HTML to include the new favicon links")
    print("2. Optionally create a site.webmanifest file for PWA support")

if __name__ == '__main__':
    generate_favicons()
