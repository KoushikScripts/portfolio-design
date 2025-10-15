# Skills Images Guide

## Current Issue
Many AI/ML skills are using fallback images (React, JS icons, etc.) because proper skill images don't exist in `/public/skills/`.

## How the Skills System Works

1. **Image Location**: All skill images are stored in `/public/skills/`
2. **Image Reference**: Each skill in `constants/index.ts` has an `image` property pointing to the filename
3. **Image Format**: PNG files, typically 80x80 pixels
4. **Display**: Images are shown in the Tech Stack section with skill names below

## Current Available Images
```
/public/skills/
├── css.png
├── docker.png
├── express.png
├── figma.png
├── firebase.png
├── framer.png
├── go.png
├── graphql.png
├── html.png
├── js.png
├── mongodb.png
├── mui.png
├── mysql.png
├── next.png
├── node.png
├── postgresql.png
├── prisma.png
├── react.png
├── reactnative.png
├── reactquery.png
├── redux.png
├── stripe.png
├── tailwind.png
├── tauri.png
└── ts.png
```

## Missing AI/ML Images Needed

### High Priority (AI/ML)
- `python.png` - Python logo (snake or official Python logo)
- `tensorflow.png` - TensorFlow logo (orange/white)
- `keras.png` - Keras logo (red K)
- `scikit-learn.png` - Scikit-learn logo (orange/blue)
- `opencv.png` - OpenCV logo (blue/green)
- `pytorch.png` - PyTorch logo (orange flame)
- `pandas.png` - Pandas logo (blue/white panda)
- `numpy.png` - NumPy logo (blue)
- `jupyter.png` - Jupyter logo (orange/gray)

### Medium Priority (DevOps)
- `kubernetes.png` - Kubernetes logo (blue wheel)
- `linux.png` - Linux Tux penguin or generic Linux logo
- `git.png` - Git logo (orange/red)
- `github.png` - GitHub logo (black cat)
- `aws.png` - AWS logo (orange/black)
- `gcp.png` - Google Cloud Platform logo
- `azure.png` - Microsoft Azure logo

### Low Priority (Additional)
- `flask.png` - Flask logo (black/white)
- `fastapi.png` - FastAPI logo (green)
- `streamlit.png` - Streamlit logo (red)
- `huggingface.png` - Hugging Face logo (yellow)

## How to Add New Images

1. **Download/Create Images**:
   - Size: 80x80 pixels (or larger, will be resized)
   - Format: PNG with transparent background preferred
   - Style: Clean, recognizable logos

2. **Add to Project**:
   ```bash
   # Place images in the public/skills/ directory
   cp your-image.png public/skills/
   ```

3. **Update Constants**:
   ```typescript
   // In constants/index.ts
   {
     skill_name: "TensorFlow",
     image: "tensorflow.png", // Change from fallback to actual image
     width: 80,
     height: 80,
   }
   ```

4. **Rebuild**:
   ```bash
   npm run build
   ```

## Current Temporary Mappings
Until proper images are added, I've updated the fallbacks to reduce duplicates:

### AI/ML Skills
- Python → react.png (TODO: add python.png)
- TensorFlow → firebase.png (orange theme)
- Keras → redux.png (purple theme)
- Scikit-Learn → tailwind.png (blue theme)
- OpenCV → graphql.png (pink theme)

### DevOps Skills
- Docker → docker.png ✅ (correct)
- Kubernetes → go.png (blue theme)
- Linux → node.png (green theme)
- Git → mongodb.png (green theme)

### Programming Languages
- JavaScript → js.png ✅ (correct)
- TypeScript → ts.png ✅ (correct)
- Java → express.png (different from JS)
- C++ → postgresql.png (blue theme)

## Recommended Image Sources
1. **Official Websites**: Most technologies have official logos/brand assets
2. **GitHub Repositories**: Many projects have logos in their repos
3. **Icon Libraries**: 
   - Simple Icons (https://simpleicons.org/)
   - DevIcons (https://devicon.dev/)
   - Tech Icons collections

## Example: Adding TensorFlow Image
1. Download TensorFlow logo from official site
2. Resize to 80x80px with transparent background
3. Save as `public/skills/tensorflow.png`
4. Update constants:
   ```typescript
   {
     skill_name: "TensorFlow",
     image: "tensorflow.png", // Changed from "firebase.png"
     width: 80,
     height: 80,
   }
   ```
5. Run `npm run build`

This will eliminate the duplicate images and make your skills section look much more professional!