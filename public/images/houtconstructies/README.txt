INSTRUKCJE DODAWANIA ZDJĘĆ DO GALERII HOUTCONSTRUCTIES
======================================================

1. Wrzuć swoje zdjęcia do tego folderu (public/images/houtconstructies/)

2. Nazwij pliki w formacie: houtconstructie1.jpg, houtconstructie2.jpg, itd.

3. Obsługiwane formaty: .jpg, .jpeg, .png, .webp

4. Zalecany rozmiar: maksymalnie 2MB na zdjęcie

5. Zalecane wymiary: 1200x800 pikseli lub podobne proporcje

6. Po dodaniu nowych zdjęć, zaktualizuj kod w:
   - src/pages/Home.tsx
   - src/components/GalleryModal.tsx

Aby dodać więcej zdjęć do modalu, dodaj nowe obiekty do tablicy galleryImages
w formacie:
{
  imageUrl: "/images/houtconstructies/houtconstructieX.jpg",
  title: "Houtconstructies",
  description: "Opis zdjęcia..."
}

Aktualnie w galerii:
- houtconstructie1.jpg (przykładowe zdjęcie)