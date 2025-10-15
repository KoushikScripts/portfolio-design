#!/bin/bash

echo "🎨 Setting up skill icons..."

# Create skills directory if it doesn't exist
mkdir -p public/skills

# Check if we have imagemagick or other conversion tools
if command -v convert &> /dev/null; then
    echo "✅ ImageMagick found, converting SVGs to PNGs..."
    
    # Convert SVGs to PNGs
    for svg_file in temp-icons/*.svg; do
        filename=$(basename "$svg_file" .svg)
        echo "Converting $filename..."
        convert "$svg_file" -resize 80x80 "public/skills/${filename}.png"
    done
    
elif command -v rsvg-convert &> /dev/null; then
    echo "✅ rsvg-convert found, converting SVGs to PNGs..."
    
    # Convert SVGs to PNGs using rsvg-convert
    for svg_file in temp-icons/*.svg; do
        filename=$(basename "$svg_file" .svg)
        echo "Converting $filename..."
        rsvg-convert -w 80 -h 80 "$svg_file" -o "public/skills/${filename}.png"
    done
    
else
    echo "❌ No SVG to PNG converter found."
    echo "Please install ImageMagick or librsvg:"
    echo "  Ubuntu/Debian: sudo apt install imagemagick librsvg2-bin"
    echo "  macOS: brew install imagemagick librsvg"
    echo "  Or manually convert the SVG files in temp-icons/ to PNG"
    exit 1
fi

echo "✅ Skill icons setup complete!"
echo "📁 Icons saved to public/skills/"

# List the created files
echo "📋 Created icons:"
ls -la public/skills/*.png | grep -E "(python|tensorflow|keras|opencv|scikit-learn|kubernetes|git)\.png" || echo "No new icons found"

echo ""
echo "🔧 Next steps:"
echo "1. Run: npm run build"
echo "2. Check your website to see the new icons"
echo "3. Update constants/index.ts to use the new image names if needed"