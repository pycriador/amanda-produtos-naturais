document.addEventListener('DOMContentLoaded', () => {
  const lojas = [
    {
      id: 'mapaParaisopolis',
      nome: 'Loja Paraisópolis',
      endereco: 'Rua Melchior Giola, 300 &mdash; Paraisópolis, São Paulo - SP, 05664-000',
      lat: -23.6167,
      lng: -46.7262
    },
    {
      id: 'mapaEmbu',
      nome: 'Loja Embu das Artes',
      endereco: 'Av. Fernando Fernandes, 800 &mdash; Lj 11 e 12, Jardim Castilho, Embu das Artes - SP, 06810-000',
      lat: -23.6417,
      lng: -46.8053
    },
    {
      id: 'mapaTaboao',
      nome: 'Loja Taboão da Serra',
      endereco: 'Estr. Kizaemon Takeuti, 2491 &mdash; Parque São Joaquim, Taboão da Serra - SP, 06775-003',
      lat: -23.6338,
      lng: -46.7777
    }
  ];

  const icon = L.icon({
    iconUrl: 'vendor/images/marker-icon.png',
    shadowUrl: 'vendor/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  lojas.forEach(loja => {
    const el = document.getElementById(loja.id);
    if (!el) return;

    const mapa = L.map(loja.id, {
      scrollWheelZoom: false,
      touchZoom: true,
      dragging: true
    }).setView([loja.lat, loja.lng], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);

    L.marker([loja.lat, loja.lng], { icon }).addTo(mapa)
      .bindPopup(`<strong>${loja.nome}</strong><br>${loja.endereco}`)
      .openPopup();
  });
});
