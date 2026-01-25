/** @jsxImportSource preact */
import { useMemo, useState } from 'preact/hooks';
import { ListingCardClient } from './ListingCardClient.jsx';

export default function ListingFilters({ items = [] }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');
  const [city, setCity] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const cities = useMemo(() => {
    const set = new Set(items.map((x) => x.city || x.location || '').filter(Boolean));
    return ['all', ...Array.from(set)];
  }, [items]);

  const types = ['all', 'house', 'condo', 'townhouse', 'apartment', 'land', 'commercial'];

  const filtered = useMemo(() => {
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;
    const q = query.trim().toLowerCase();
    return items.filter((x) => {
      if (x.price < min || x.price > max) return false;
      if (type !== 'all' && x.type !== type) return false;
      if (city !== 'all' && (x.city || x.location) !== city) return false;
      if (q) {
        const text = `${x.title} ${x.location} ${x.city || ''}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [items, query, type, city, minPrice, maxPrice]);

  return (
    <div class="w-full">
      <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 p-4 rounded-xl border border-smoking-200 bg-white/60 backdrop-blur">
        <input
          class="col-span-2 sm:col-span-2 border rounded-md px-3 py-2 text-sm"
          type="text"
          placeholder="Search city, address..."
          value={query}
          onInput={(e) => setQuery(e.currentTarget.value)}
        />
        <select class="border rounded-md px-2 py-2 text-sm" value={type} onChange={(e) => setType(e.currentTarget.value)}>
          {types.map((t) => (
            <option value={t}>{t === 'all' ? 'All Types' : t[0].toUpperCase() + t.slice(1)}</option>
          ))}
        </select>
        <select class="border rounded-md px-2 py-2 text-sm" value={city} onChange={(e) => setCity(e.currentTarget.value)}>
          {cities.map((c) => (
            <option value={c}>{c === 'all' ? 'All Locations' : c}</option>
          ))}
        </select>
        <input
          class="border rounded-md px-3 py-2 text-sm"
          type="number"
          min="0"
          placeholder="Min Price"
          value={minPrice}
          onInput={(e) => setMinPrice(e.currentTarget.value)}
        />
        <input
          class="border rounded-md px-3 py-2 text-sm"
          type="number"
          min="0"
          placeholder="Max Price"
          value={maxPrice}
          onInput={(e) => setMaxPrice(e.currentTarget.value)}
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {filtered.map((x) => (
          <ListingCardClient
            slug={x.slug}
            title={x.title}
            price={x.price}
            currency={x.currency}
            location={x.location}
            bedrooms={x.bedrooms}
            bathrooms={x.bathrooms}
            areaSqFt={x.areaSqFt}
            imageUrl={x.images?.[0] || null}
          />
        ))}
        {filtered.length === 0 ? (
          <div class="col-span-full text-sm text-slate-600">No results. Try broadening your filters.</div>
        ) : null}
      </div>
    </div>
  );
}

