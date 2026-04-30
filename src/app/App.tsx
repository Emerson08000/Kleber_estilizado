import { Youtube, Instagram, MessageCircle, Music, Play, Users, Heart, Award, Calendar, MapPin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import principalImg from '../imports/WhatsApp_Image_2026-04-28_at_21.40.08.jpeg';
import fotoSobreMim from '../imports/WhatsApp_Image_2026-04-28_at_21.37.54_(1)-1.jpeg';
import galeria1 from '../imports/WhatsApp_Image_2026-04-28_at_21.40.08_(1).jpeg';
import galeria2 from '../imports/WhatsApp_Image_2026-04-28_at_21.37.54_(1)-2.jpeg';
import galeria3 from '../imports/WhatsApp_Image_2026-04-28_at_21.37.54-2.jpeg';

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/channel/UCARwnUp7RYd2vOyRaOZNdIg',
      color: 'hover:bg-red-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/kleber_estilizado/',
      color: 'hover:bg-pink-500'
    },
    {
      name: 'Sua Música',
      icon: Music,
      url: 'https://suamusica.com.br/klebertonsilvaQ/uma-dose-com-o-kleber',
      color: 'hover:bg-orange-500'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/5582994307234',
      color: 'hover:bg-green-500'
    },
    {
      name: 'Spotify',
      icon: Music,
      url: 'https://open.spotify.com/intl-pt/artist/2iaKDE7EZBc0RIjYoGYTFq?si=QEWtDZR0Sf6FwBQOkNUy4A',
      color: 'hover:bg-green-500'
    }
  ];

  const musicas = [
    {
      titulo: 'Música 1',
      videoId: 'xo5jekRGl-s'
    },
    {
</a>
    }
  ];

  const musicas = [
    {
      titulo: 'Música 1',
      videoId: 'xo5jekRGl-s'
    },
    {
      titulo: 'Música 2',
      videoId: '_TFjNfJL4vY'
    },
    {
      titulo: 'Música 3',
      videoId: 'fyAMggfi8-I'
    }
  ];

  const estatisticas = [
    { icon: Play, valor: '50K+', label: 'Visualizações' },
    { icon: Users, valor: '8K+', label: 'Seguidores' },
    { icon: Heart, valor: '30K+', label: 'Curtidas' },
    { icon: Award, valor: '5+', label: 'Músicas' }
  ];

  const shows = [
    {
      data: '2 Mai 2026,10:30H ',
      local: 'Boteco cervejeiro',
      cidade: 'Maceió,AL'
    },
    {
      data: 'A decidir',
      local: 'A decidir',
      cidade: 'A decidir'
    },
    {
      data: 'A decidir',
      local: 'A decidir',
      cidade: 'A decidir'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Contato de ${formData.nome}`;
    const body = `Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`;

    window.location.href = `mailto:klebertonduda@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setFormData({ nome: '', email: '', mensagem: '' });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptMCAyNHY4aDh2LThoLTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative">
          <div className="text-center">
            <div className="inline-block w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mb-6 shadow-2xl overflow-hidden ring-4 ring-red-500/50">
              <img
                src={principalImg}
                alt="Kleber Estilizado"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="mb-4 bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent px-4">
              Kleber Estilizado
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 px-4">
              Artista independente trazendo música que toca a alma
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 ${social.color} hover:scale-110 text-white text-sm sm:text-base`}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">{social.name}</span>
                  <span className="sm:hidden">{social.name === 'Sua Música' ? 'Música' : social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="container mx-auto px-4 py-12 md:py-16 border-y border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {estatisticas.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-black rounded-full mb-3 md:mb-4">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-white mb-1 text-lg sm:text-xl md:text-2xl">{stat.valor}</div>
              <div className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sobre Mim */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-black rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={fotoSobreMim}
                  alt="Kleber Estilizado"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-4 md:mb-6 text-white">Sobre Mim</h2>
              <div className="space-y-3 md:space-y-4 text-gray-300 text-sm sm:text-base">
                <p>
                  Kleber Estilizado é um cantor independente natural de Ibateguara, Alagoas, que vem conquistando espaço na música com autenticidade, talento e muita dedicação. Desde cedo, a música fez parte da sua vida, sendo não apenas uma paixão, mas também uma forma de expressão e conexão com as pessoas.
                </p>
                <p>
                  Com um estilo marcante e versátil, Kleber leva ao público interpretações cheias de emoção, sempre buscando transmitir verdade em cada canção. Seu trabalho reflete as raízes nordestinas, misturadas com influências contemporâneas, criando uma identidade única e envolvente.
                </p>
                <p>
                  Como artista independente, Kleber Estilizado trilha seu caminho com coragem e determinação, levando sua música a diferentes públicos e construindo sua história passo a passo. Cada apresentação é uma oportunidade de compartilhar energia, alegria e sentimento, fortalecendo o vínculo com seus fãs e ampliando seu alcance.
                </p>
                <p>
                  Mais do que um cantor, Kleber é um artista em constante evolução, que acredita no poder da música para transformar momentos e marcar vidas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Playlist Section */}
      <div className="container mx-auto px-4 py-12 md:py-16 bg-white/5">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-white">Ouça Minhas Músicas</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-white mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {musicas.map((musica, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${musica.videoId}`}
                  title={musica.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-white">{musica.titulo}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Próximos Shows */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-white">Próximos Shows</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-white mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {shows.map((show, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-black rounded-xl flex-shrink-0">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2 text-base sm:text-lg">{show.local}</h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-1 text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{show.data}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{show.cidade}</span>
                    </div>
                  </div>
                </div>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 text-sm sm:text-base w-full md:w-auto">
                  Comprar Ingresso
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Galeria */}
      <div className="container mx-auto px-4 py-12 md:py-20 bg-white/5">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-white">Galeria</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-white mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative">
            <img
              src={galeria1}
              alt="Kleber Estilizado"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative">
            <img
              src={galeria2}
              alt="Kleber Estilizado"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden group cursor-pointer relative">
            <img
              src={galeria3}
              alt="Kleber Estilizado"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Contato */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mb-4 text-white">Entre em Contato</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-white mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm sm:text-base px-4">
            Tem alguma proposta ou quer trocar uma ideia? Manda uma mensagem!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="nome" className="block text-white mb-2 text-sm sm:text-base">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-white mb-2 text-sm sm:text-base">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none text-sm sm:text-base"
                placeholder="Escreva sua mensagem aqui..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 md:py-8 text-center border-t border-white/10">
        <div className="flex justify-center gap-4 sm:gap-6 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
          © 2026 Kleber Estilizado. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}