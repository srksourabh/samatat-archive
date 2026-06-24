import os
from PIL import Image

files = [
    r"C:\Users\soura\Downloads\CFPGS 2026\IMG_8043.JPG",
    r"C:\Users\soura\Downloads\CFPGS 2026\IMG_8027.JPG",
    r"C:\Users\soura\Downloads\CFPGS 2026\IMG_8000.JPG",
    r"C:\Users\soura\Downloads\CFPGS 2026\IMG_7992.JPG",
    r"C:\Users\soura\Downloads\CFPGS 2026\IMG_8146.JPG",
    r"C:\Users\soura\Downloads\CFPGS 2026\IMG_8140.JPG",
    r"C:\Users\soura\Downloads\CFPGS 2026\IMG_8094.JPG",
    r"C:\Users\soura\Downloads\CFPGS 2026\IMG_8082.JPG",
    r"C:\Users\soura\Downloads\CFPGS 2026\IMG_8059.JPG",
    r"C:\Users\soura\Downloads\CFPGS 2026\IMG_8057.JPG",
    r"C:\Users\soura\Downloads\WhatsApp Image 2026-06-24 at 16.32.00.jpeg",
    r"C:\Users\soura\Downloads\WhatsApp Image 2026-06-24 at 16.31.59 (1) - Copy.jpeg",
    r"C:\Users\soura\Downloads\WhatsApp Image 2026-06-24 at 16.31.59.jpeg"
]

out_dir = r"c:\Users\soura\Dropbox\AI\Projects\samatat-archive\public\public\images\festivals\2025\photos"
os.makedirs(out_dir, exist_ok=True)

photo_paths = []

for idx, f in enumerate(files):
    if os.path.exists(f):
        try:
            img = Image.open(f)
            # convert to RGB if not
            if img.mode != 'RGB':
                img = img.convert('RGB')
            # resize if too big (max width/height 1600)
            max_size = 1600
            if img.width > max_size or img.height > max_size:
                img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
            
            out_name = f"photo_{idx+1}.jpg"
            out_path = os.path.join(out_dir, out_name)
            img.save(out_path, "JPEG", quality=80, optimize=True)
            photo_paths.append(f"'/images/festivals/2025/photos/{out_name}'")
            print(f"Optimized and saved: {out_name}")
        except Exception as e:
            print(f"Error processing {f}: {e}")
    else:
        print(f"File not found: {f}")

print("\nCopy these paths into festivalData.ts:")
print(",\n".join(photo_paths))
