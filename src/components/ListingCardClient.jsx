/** @jsxImportSource preact */

export function ListingCardClient({
  slug,
  title,
  price,
  currency = 'USD',
  location,
  bedrooms = 0,
  bathrooms = 0,
  areaSqFt,
  imageUrl,
}) {
  const formatted = new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(price);
  return (
    <a href={`/listings/${slug}`} class="block rounded-2xl overflow-hidden border border-smoking-200 hover:shadow-md transition">
      <div class="aspect-[4/3] bg-slate-100 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} class="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div class="w-full h-full flex items-center justify-center text-slate-400 text-sm">No image</div>
        )}
      </div>
      <div class="p-4">
        <h3 class="mb-1">{title}</h3>
        <p class="text-smoking-600 font-medium">{formatted}</p>
        <p class="text-sm text-slate-600">{location}</p>
        <div class="mt-2 text-xs text-slate-600 flex gap-3">
          <span>{bedrooms} bd</span>
          <span>{bathrooms} ba</span>
          {areaSqFt ? <span>{areaSqFt} sqft</span> : null}
        </div>
      </div>
    </a>
  );
}

