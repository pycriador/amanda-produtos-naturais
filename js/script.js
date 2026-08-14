const produtosBase = [
  {
    id: 1, nome: "Açafrão (Cúrcuma)", slug: "acafrao-em-po", categoria: "Temperos",
    img: "img/produtos/acafrao.jpg", imgAlt: "Açafrão em pó natural utilizado como tempero para arroz, carnes, legumes e molhos", imgTitle: "Açafrão em pó Amanda Produtos Naturais", imgLegenda: "Açafrão natural rico em sabor",
    desc: "Tempero de cor intensa utilizado na culinária.",
    descLonga: "O açafrão, também conhecido como cúrcuma, é um tempero de cor alaranjada intensa amplamente utilizado na culinária brasileira e internacional. Rico em curcumina, um poderoso antioxidante natural, o açafrão da Amanda é selecionado manualmente para garantir frescor e aroma incomparáveis.",
    beneficios: ["Antioxidante natural", "Rico em curcumina", "Auxilia alimentação equilibrada", "Cor e sabor únicos"],
    comoUsar: "Arroz, carnes, sopas, legumes, molhos.",
    receita: "Arroz dourado: refogue 1 xícara de arroz com cebola e alho, adicione 1 colher (chá) de açafrão em pó, misture bem antes de adicionar a água. Cozinhe normalmente. O resultado é um arroz soltinho e dourado.",
    keywords: "açafrão em pó, cúrcuma, tempero natural, açafrão da terra",
    metaTitle: "Açafrão em Pó (Cúrcuma) Natural | Amanda Produtos Naturais",
    metaDesc: "Açafrão em pó natural selecionado. Rico em curcumina, ideal para arroz, carnes, sopas e molhos. Tempero de cor intensa e sabor marcante.",
    faq: [
      { q: "Qual a validade do açafrão em pó?", r: "O prazo de validade é de 12 meses após a data de fabricação, armazenado em local seco e arejado." },
      { q: "O açafrão da Amanda é puro?", r: "Sim, nosso açafrão é 100% puro, sem aditivos ou corantes artificiais." }
    ]
  },
  {
    id: 2, nome: "Orégano", slug: "oregano", categoria: "Temperos",
    img: "img/produtos/oregano.jpg", imgAlt: "Orégano desidratado natural para tempero", imgTitle: "Orégano Amanda Produtos Naturais", imgLegenda: "Orégano selecionado",
    desc: "Erva aromática tradicional.",
    descLonga: "O orégano é uma erva aromática tradicional da culinária mediterrânea, conhecida por seu sabor marcante e versatilidade na cozinha. Nosso orégano é cultivado e desidratado com cuidado para preservar todo o seu aroma e sabor.",
    beneficios: ["Sabor intenso", "Rico em compostos naturais", "Versátil na cozinha"],
    comoUsar: "Pizza, massas, carnes.",
    receita: "Frango ao orégano: tempere sobrecoxas com sal, pimenta, alho e 1 colher (sopa) de orégano. Regue com azeite e limão. Asse em forno médio por 35 minutos.",
    keywords: "orégano, tempero natural, ervas aromáticas",
    metaTitle: "Orégano Desidratado Natural | Amanda Produtos Naturais",
    metaDesc: "Orégano natural desidratado para pizzas, massas e carnes. Erva aromática tradicional de sabor intenso.",
    faq: [
      { q: "Qual a origem do orégano?", r: "Nosso orégano é proveniente de produtores selecionados." }
    ]
  },
  {
    id: 3, nome: "Canela em pó", slug: "canela-em-po", categoria: "Temperos",
    img: "img/produtos/canela.jpg", imgAlt: "Canela em pó natural aromática", imgTitle: "Canela em Pó Amanda Produtos Naturais", imgLegenda: "Canela em pó aromática",
    desc: "Tempero aromático e versátil.",
    descLonga: "A canela em pó é um dos temperos mais versáteis da culinária, perfeita para preparos doces e salgados. Com aroma agradável e sabor marcante, nossa canela é moída a partir de paus selecionados.",
    beneficios: ["Aroma agradável", "Excelente para doces", "Versátil"],
    comoUsar: "Frutas, café, mingau.",
    receita: "Banana assada com canela: corte bananas ao meio, polvilhe canela em pó e regue com mel. Asse por 12 minutos a 180°C. Sirva quente.",
    keywords: "canela em pó, tempero doce, canela natural",
    metaTitle: "Canela em Pó Natural | Amanda Produtos Naturais",
    metaDesc: "Canela em pó natural aromática para frutas, café, mingau e receitas. Tempero versátil e saboroso.",
    faq: []
  },
  {
    id: 4, nome: "Gengibre", slug: "gengibre", categoria: "Temperos",
    img: "img/produtos/gengibre.jpg", imgAlt: "Gengibre em pó natural para chás e receitas", imgTitle: "Gengibre Amanda Produtos Naturais", imgLegenda: "Gengibre selecionado",
    desc: "Raiz picante e aromática.",
    descLonga: "O gengibre é uma raiz de sabor picante e aroma marcante, amplamente utilizado na culinária e em preparos medicinais. Rico em compostos bioativos, é perfeito para chás, sucos e receitas.",
    beneficios: ["Sabor picante", "Muito utilizado em chás", "Versátil"],
    comoUsar: "Chás, sucos e receitas.",
    receita: "Chá de gengibre: ferva 500ml de água com 3 rodelas de gengibre fresco e 1 pau de canela por 5 minutos. Coe e adoce com mel. Perfeito para dias frios.",
    keywords: "gengibre, raiz natural, tempero picante",
    metaTitle: "Gengibre Natural | Amanda Produtos Naturais",
    metaDesc: "Gengibre natural selecionado para chás, sucos e receitas culinárias. Raiz de sabor picante e aromático.",
    faq: []
  },
  {
    id: 5, nome: "Chia", slug: "chia", categoria: "Sementes",
    img: "img/produtos/chia.jpg", imgAlt: "Chia em grãos natural fonte de fibras e ômega 3", imgTitle: "Chia Amanda Produtos Naturais", imgLegenda: "Chia rica em nutrientes",
    desc: "Semente rica em nutrientes.",
    descLonga: "A chia é uma semente milenar reconhecida por seu alto valor nutricional. Fonte de fibras, ômega 3 vegetal e proteínas, é um superalimento versátil que pode ser incorporado em diversas preparações.",
    beneficios: ["Fonte de fibras", "Fonte de ômega 3 vegetal", "Superalimento"],
    comoUsar: "Iogurte, vitaminas, frutas.",
    receita: "Pudim de chia: misture 3 colheres (sopa) de chia com 200ml de leite vegetal e 1 colher (mel). Deixe na geladeira por 4h. Sirva com frutas frescas.",
    keywords: "chia, semente natural, ômega 3, fibras",
    metaTitle: "Chia em Grãos Natural | Amanda Produtos Naturais",
    metaDesc: "Chia em grãos, fonte de fibras e ômega 3 vegetal. Superalimento versátil para iogurte, vitaminas e frutas.",
    faq: []
  },
  {
    id: 6, nome: "Linhaça Dourada", slug: "linhaca-dourada", categoria: "Sementes",
    img: "img/produtos/linhaca.jpg", imgAlt: "Linhaça dourada natural rica em fibras", imgTitle: "Linhaça Dourada Amanda Produtos Naturais", imgLegenda: "Linhaça dourada nutritiva",
    desc: "Semente nutritiva e versátil.",
    descLonga: "A linhaça dourada é uma semente rica em fibras e nutrientes essenciais. Perfeita para enriquecer pães, bolos, vitaminas e outras preparações, é uma excelente fonte de saúde.",
    beneficios: ["Fibras", "Sementes nutritivas", "Versátil"],
    comoUsar: "Pães, bolos, vitaminas.",
    receita: "Vitamina de linhaça: bata no liquidificador 1 banana, 200ml de leite, 1 colher (sopa) de linhaça dourada e 1 colher de mel. Sirva gelado.",
    keywords: "linhaça dourada, semente natural, fibras",
    metaTitle: "Linhaça Dourada Natural | Amanda Produtos Naturais",
    metaDesc: "Linhaça dourada natural rica em fibras e nutrientes. Ideal para pães, bolos e vitaminas.",
    faq: []
  },
  {
    id: 7, nome: "Quinoa", slug: "quinoa", categoria: "Grãos",
    img: "img/produtos/quinoa.jpg", imgAlt: "Quinoa em grãos natural rica em proteínas vegetais", imgTitle: "Quinoa Amanda Produtos Naturais", imgLegenda: "Quinoa grão nutritivo",
    desc: "Grão rico em proteínas.",
    descLonga: "A quinoa é um grão completo, rico em proteínas vegetais de alta qualidade, fibras e minerais. Considerada um superalimento, é uma excelente alternativa para uma alimentação equilibrada.",
    beneficios: ["Rica em proteínas vegetais", "Superalimento"],
    comoUsar: "Saladas e arroz.",
    receita: "Salada de quinoa: cozinhe 1 xícara de quinoa em 2 xícaras de água por 15 minutos. Misture com tomate cereja, pepino, hortelã, azeite e limão.",
    keywords: "quinoa, grão natural, proteínas vegetais",
    metaTitle: "Quinoa em Grãos Natural | Amanda Produtos Naturais",
    metaDesc: "Quinoa em grãos natural rica em proteínas vegetais. Superalimento para saladas, arroz e receitas saudáveis.",
    faq: []
  },
  {
    id: 8, nome: "Aveia", slug: "aveia", categoria: "Grãos",
    img: "img/produtos/aveia.jpg", imgAlt: "Aveia em flocos natural rica em fibras", imgTitle: "Aveia Amanda Produtos Naturais", imgLegenda: "Aveia para café da manhã",
    desc: "Cereal completo e nutritivo.",
    descLonga: "A aveia é um cereal completo, rico em fibras solúveis que auxiliam o bom funcionamento do organismo. Perfeita para o café da manhã e diversas preparações.",
    beneficios: ["Fibras", "Muito versátil", "Café da manhã"],
    comoUsar: "Café da manhã, mingau, panquecas.",
    receita: "Mingau de aveia: ferva 200ml de leite com 3 colheres (sopa) de aveia e 1 colher de mel. Mexa até engrossar. Finalize com canela.",
    keywords: "aveia, cereal natural, fibras, café da manhã",
    metaTitle: "Aveia em Flocos Natural | Amanda Produtos Naturais",
    metaDesc: "Aveia em flocos natural rica em fibras. Cereal completo e versátil para café da manhã e receitas.",
    faq: []
  },
  {
    id: 9, nome: "Castanha-do-Pará", slug: "castanha-do-para", categoria: "Oleaginosas",
    img: "img/produtos/castanha-para.jpg", imgAlt: "Castanha-do-Pará natural rica em selênio", imgTitle: "Castanha-do-Pará Amanda Produtos Naturais", imgLegenda: "Castanha-do-Pará selecionada",
    desc: "Oleaginosa da Amazônia.",
    descLonga: "A castanha-do-Pará é uma oleaginosa típica da Amazônia brasileira, reconhecida por seu alto teor de selênio, um mineral essencial para o organismo. Crocante e saborosa.",
    beneficios: ["Rica em selênio", "Fonte de energia"],
    comoUsar: "Lanches naturais.",
    receita: "Consuma 2 castanhas-do-Pará por dia como snack ou triture sobre saladas e iogurtes para um toque crocante.",
    keywords: "castanha-do-pará, oleaginosa, selênio, castanha natural",
    metaTitle: "Castanha-do-Pará Natural | Amanda Produtos Naturais",
    metaDesc: "Castanha-do-Pará natural rica em selênio. Oleaginosa da Amazônia crocante e nutritiva para lanches.",
    faq: []
  },
  {
    id: 10, nome: "Nozes", slug: "nozes", categoria: "Oleaginosas",
    img: "img/produtos/nozes.jpg", imgAlt: "Nozes natural rica em gorduras boas", imgTitle: "Nozes Amanda Produtos Naturais", imgLegenda: "Nozes selecionadas",
    desc: "Oleaginosas saborosas.",
    descLonga: "As nozes são oleaginosas ricas em gorduras boas (ômega 3), antioxidantes e nutrientes essenciais. Perfeitas como snack saudável ou para enriquecer sobremesas.",
    beneficios: ["Gorduras boas", "Antioxidantes"],
    comoUsar: "Lanches e sobremesas.",
    receita: "Brownie de nozes: derreta 200g de chocolate com 100g de manteiga, misture 3 ovos, 1 xícara de açúcar e 1/2 xícara de farinha. Adicione 1 xícara de nozes picadas e asse a 180°C por 25 minutos.",
    keywords: "nozes, oleaginosa, gorduras boas, lanche natural",
    metaTitle: "Nozes Natural | Amanda Produtos Naturais",
    metaDesc: "Nozes naturais selecionadas ricas em gorduras boas e antioxidantes. Perfeitas para lanches e sobremesas.",
    faq: []
  },
  {
    id: 11, nome: "Amêndoas", slug: "amendoas", categoria: "Oleaginosas",
    img: "img/produtos/amendoas.jpg", imgAlt: "Amêndoas natural rica em proteínas e fibras", imgTitle: "Amêndoas Amanda Produtos Naturais", imgLegenda: "Amêndoas crocantes",
    desc: "Oleaginosa crocante.",
    descLonga: "As amêndoas são oleaginosas crocantes, ricas em proteínas, fibras e gorduras boas. Um snack nutritivo e versátil para qualquer momento do dia.",
    beneficios: ["Proteínas", "Fibras"],
    comoUsar: "Snacks naturais.",
    receita: "Leite de amêndoas: deixe 1 xícara de amêndoas de molho por 8h. Bata com 3 xícaras de água e coe. Adoce a gosto.",
    keywords: "amêndoas, oleaginosa, proteínas, lanche natural",
    metaTitle: "Amêndoas Natural | Amanda Produtos Naturais",
    metaDesc: "Amêndoas naturais crocantes ricas em proteínas e fibras. Snack nutritivo e versátil.",
    faq: []
  },
  {
    id: 12, nome: "Uva Passa", slug: "uva-passa", categoria: "Frutas Secas",
    img: "img/produtos/uva-passa.jpg", imgAlt: "Uva passa natural fonte de energia", imgTitle: "Uva Passa Amanda Produtos Naturais", imgLegenda: "Uva passa doce",
    desc: "Fruta desidratada e doce.",
    descLonga: "A uva passa é uma fruta desidratada naturalmente doce, rica em energia natural e nutrientes. Perfeita para arroz, bolos, pães e diversas receitas.",
    beneficios: ["Energia natural", "Versátil"],
    comoUsar: "Arroz, bolos, pães.",
    receita: "Arroz doce com uva passa: cozinhe 1 xícara de arroz com 1 litro de leite e açúcar. Quando cremoso, adicione 1/2 xícara de uva passa e canela.",
    keywords: "uva passa, fruta seca, energia natural",
    metaTitle: "Uva Passa Natural | Amanda Produtos Naturais",
    metaDesc: "Uva passa natural doce fonte de energia. Ideal para arroz, bolos, pães e receitas.",
    faq: []
  },
  {
    id: 13, nome: "Hibisco", slug: "hibisco", categoria: "Ervas Medicinais",
    img: "img/produtos/hibisco.jpg", imgAlt: "Hibisco seco natural para chá aromático", imgTitle: "Hibisco Amanda Produtos Naturais", imgLegenda: "Hibisco para infusão",
    desc: "Flor utilizada em infusões.",
    descLonga: "O hibisco é uma flor de cor vibrante utilizada em infusões e chás aromáticos. Conhecido por seu sabor levemente ácido e refrescante, é uma excelente opção para bebidas saudáveis.",
    beneficios: ["Chá aromático", "Refrescante"],
    comoUsar: "Infusão, chás gelados.",
    receita: "Chá de hibisco gelado: infusione 2 colheres (sopa) de hibisco em 500ml de água fervente por 5 minutos. Coe, adoce e leve à geladeira. Sirva com gelo.",
    keywords: "hibisco, flor natural, chá, infusão",
    metaTitle: "Hibisco Natural para Chá | Amanda Produtos Naturais",
    metaDesc: "Hibisco natural seco para chás e infusões aromáticas. Flor de sabor levemente ácido e refrescante.",
    faq: []
  },
  {
    id: 14, nome: "Camomila", slug: "camomila", categoria: "Ervas Medicinais",
    img: "img/produtos/camomila.jpg", imgAlt: "Camomila seca natural para chá tradicional", imgTitle: "Camomila Amanda Produtos Naturais", imgLegenda: "Camomila para infusão",
    desc: "Erva tradicional para chás.",
    descLonga: "A camomila é uma erva tradicionalmente utilizada em infusões calmantes. Com aroma suave e sabor delicado, é a escolha perfeita para momentos de relaxamento.",
    beneficios: ["Chá tradicional", "Calmante"],
    comoUsar: "Infusão.",
    receita: "Chá de camomila relaxante: coloque 1 colher (sopa) de camomila em 300ml de água fervente. Abafe por 5 minutos, coe e adoce com mel.",
    keywords: "camomila, chá, erva calmante, infusão",
    metaTitle: "Camomila Natural para Chá | Amanda Produtos Naturais",
    metaDesc: "Camomila natural seca para chás e infusões. Erva tradicional de sabor suave e delicado.",
    faq: []
  },
  {
    id: 15, nome: "Erva-doce", slug: "erva-doce", categoria: "Ervas Medicinais",
    img: "img/produtos/erva-doce.jpg", imgAlt: "Erva-doce natural para chás de sabor suave", imgTitle: "Erva-doce Amanda Produtos Naturais", imgLegenda: "Erva-doce aromática",
    desc: "Erva de sabor suave.",
    descLonga: "A erva-doce é uma planta aromática de sabor suave e adocicado, amplamente utilizada em chás e infusões. Perfeita para ser consumida após as refeições.",
    beneficios: ["Sabor suave", "Digestiva"],
    comoUsar: "Chás, infusões.",
    receita: "Chá digestivo de erva-doce: ferva 300ml de água com 1 colher (chá) de sementes de erva-doce por 3 minutos. Coe e beba após as refeições.",
    keywords: "erva-doce, chá, erva aromática, infusão",
    metaTitle: "Erva-doce Natural | Amanda Produtos Naturais",
    metaDesc: "Erva-doce natural para chás e infusões. Planta aromática de sabor suave e propriedades digestivas.",
    faq: []
  },
  {
    id: 16, nome: "Alecrim", slug: "alecrim", categoria: "Temperos",
    img: "img/produtos/alecrim.jpg", imgAlt: "Alecrim desidratado natural tempero aromático", imgTitle: "Alecrim Amanda Produtos Naturais", imgLegenda: "Alecrim aromático",
    desc: "Erva aromática marcante.",
    descLonga: "O alecrim é uma erva aromática de sabor marcante, indispensável na culinária para carnes, batatas e assados. Cultivado e desidratado para preservar seu aroma inconfundível.",
    beneficios: ["Tempero aromático", "Sabor marcante"],
    comoUsar: "Carnes, batatas, assados.",
    receita: "Batatas ao alecrim: corte batatas em gomos, tempere com sal, azeite e alecrim. Asse a 200°C por 30 minutos até dourar.",
    keywords: "alecrim, tempero natural, erva aromática",
    metaTitle: "Alecrim Desidratado Natural | Amanda Produtos Naturais",
    metaDesc: "Alecrim desidratado natural de sabor marcante. Erva aromática para carnes, batatas e assados.",
    faq: []
  },
  {
    id: 17, nome: "Páprica Defumada", slug: "paprica-defumada", categoria: "Temperos",
    img: "img/produtos/paprica.jpg", imgAlt: "Páprica defumada natural tempero marcante", imgTitle: "Páprica Defumada Amanda Produtos Naturais", imgLegenda: "Páprica defumada saborosa",
    desc: "Tempero de sabor marcante.",
    descLonga: "A páprica defumada é um tempero de sabor marcante e aroma inconfundível, obtido a partir da moagem de pimentões defumados. Perfeita para carnes e legumes.",
    beneficios: ["Sabor marcante", "Aroma defumado"],
    comoUsar: "Carnes, legumes, molhos.",
    receita: "Frango com páprica: tempere sobrecoxas com sal, alho, 1 colher (sopa) de páprica defumada e azeite. Grelhe ou asse a 200°C por 30 minutos.",
    keywords: "páprica defumada, tempero natural, páprica",
    metaTitle: "Páprica Defumada Natural | Amanda Produtos Naturais",
    metaDesc: "Páprica defumada natural de sabor marcante. Tempero aromático para carnes, legumes e molhos.",
    faq: []
  },
  {
    id: 18, nome: "Pimenta-do-Reino", slug: "pimenta-do-reino", categoria: "Temperos",
    img: "img/produtos/pimenta-reino.jpg", imgAlt: "Pimenta-do-reino em pó natural", imgTitle: "Pimenta-do-Reino Amanda Produtos Naturais", imgLegenda: "Pimenta-do-reino moída",
    desc: "Tempero clássico e versátil.",
    descLonga: "A pimenta-do-reino é o tempero mais utilizado no mundo, conhecida por seu sabor picante e versatilidade. Moída a partir de grãos selecionados.",
    beneficios: ["Realça o sabor", "Versátil"],
    comoUsar: "Qualquer preparo culinário.",
    receita: "Use pimenta-do-reino moída na hora para temperar carnes, molhos, saladas e ovos. Experimente no café fresco para um toque especial.",
    keywords: "pimenta-do-reino, tempero natural, pimenta moída",
    metaTitle: "Pimenta-do-Reino Moída Natural | Amanda Produtos Naturais",
    metaDesc: "Pimenta-do-reino natural moída, tempero clássico que realça o sabor de qualquer preparo culinário.",
    faq: []
  },
  {
    id: 19, nome: "Granola", slug: "granola", categoria: "Cereais",
    img: "img/produtos/granola.jpg", imgAlt: "Granola natural mix de cereais e frutas", imgTitle: "Granola Amanda Produtos Naturais", imgLegenda: "Granola crocante",
    desc: "Mistura de cereais e frutas.",
    descLonga: "A granola Amanda é uma mistura selecionada de cereais, frutas secas e oleaginosas. Crocante e nutritiva, é a escolha perfeita para um café da manhã saudável.",
    beneficios: ["Mistura de cereais", "Energia"],
    comoUsar: "Iogurte, frutas, leite.",
    receita: "Tigela de café da manhã: misture iogurte natural, frutas picadas, 3 colheres (sopa) de granola e um fio de mel.",
    keywords: "granola, cereal, café da manhã, mix natural",
    metaTitle: "Granola Natural | Amanda Produtos Naturais",
    metaDesc: "Granola natural mix de cereais, frutas secas e oleaginosas. Crocante e nutritiva para café da manhã.",
    faq: []
  },
  {
    id: 20, nome: "Mix de Castanhas", slug: "mix-de-castanhas", categoria: "Oleaginosas",
    img: "img/produtos/mix-castanhas.jpg", imgAlt: "Mix de castanhas natural combinação nutritiva", imgTitle: "Mix de Castanhas Amanda Produtos Naturais", imgLegenda: "Mix de castanhas",
    desc: "Combinação de oleaginosas.",
    descLonga: "O mix de castanhas Amanda é uma combinação selecionada das melhores oleaginosas, perfeito para um lanche nutritivo e saboroso entre as refeições.",
    beneficios: ["Combinação nutritiva", "Energia natural"],
    comoUsar: "Lanches, snacks.",
    receita: "Mix energético: combine o mix de castanhas com frutas secas e lascas de coco. Leve na bolsa para um lanche prático e saudável.",
    keywords: "mix de castanhas, oleaginosas, lanche natural",
    metaTitle: "Mix de Castanhas Natural | Amanda Produtos Naturais",
    metaDesc: "Mix de castanhas natural combinação nutritiva de oleaginosas selecionadas. Lanche saudável e saboroso.",
    faq: []
  }
];

function enrichProdutos() {
  return produtosBase.map(p => ({
    ...p,
    ogTitle: p.ogTitle || p.metaTitle,
    ogDesc: p.ogDesc || p.metaDesc,
    ogImage: p.ogImage || p.img,
    relacionados: p.relacionados || [],
    ingredientes: p.ingredientes || [],
    infoNutricional: p.infoNutricional || null,
    conservacao: p.conservacao || "Armazenar em local seco e arejado, longe da luz solar direta."
  }));
}

const produtos = enrichProdutos();

const observerAnimacoes = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

function observarAnimacao(el) {
  observerAnimacoes.observe(el);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

const PRODUTOS_POR_PAGINA = 5;
let paginaAtual = 1;

function renderProdutos() {
  const grid = document.getElementById('produtosGrid');
  const totalPaginas = Math.ceil(produtos.length / PRODUTOS_POR_PAGINA);

  if (paginaAtual > totalPaginas) paginaAtual = totalPaginas;
  if (paginaAtual < 1) paginaAtual = 1;

  const inicio = (paginaAtual - 1) * PRODUTOS_POR_PAGINA;
  const itensPagina = produtos.slice(inicio, inicio + PRODUTOS_POR_PAGINA);

  grid.innerHTML = itensPagina.map(p => `
    <article class="produto-card fade-in-up" data-id="${p.id}">
      <img src="${escapeHtml(p.img)}" alt="${escapeHtml(p.imgAlt)}" title="${escapeHtml(p.imgTitle)}" loading="lazy" decoding="async" width="400" height="300">
      <div class="card-body">
        <h3>${escapeHtml(p.nome)}</h3>
        <p>${escapeHtml(p.desc)}</p>
        <button class="btn btn-outline" data-id="${p.id}" aria-label="Saiba mais sobre ${escapeHtml(p.nome)}">Saiba mais</button>
      </div>
    </article>
  `).join('');

  document.getElementById('pagInfo').textContent = `${paginaAtual} de ${totalPaginas}`;
  document.getElementById('pagAnterior').disabled = paginaAtual <= 1;
  document.getElementById('pagProximo').disabled = paginaAtual >= totalPaginas;

  grid.querySelectorAll('.fade-in-up').forEach(el => observarAnimacao(el));
}

function openModal(id) {
  const p = produtos.find(prod => prod.id === id);
  if (!p) return;

  const modal = document.getElementById('produtoModal');
  const prevFocus = document.activeElement;

  document.getElementById('modalImage').src = p.img;
  document.getElementById('modalImage').alt = p.imgAlt;
  document.getElementById('modalImage').title = p.imgTitle;
  document.getElementById('modalLegenda').textContent = p.imgLegenda;
  document.getElementById('modalTitle').textContent = p.nome;
  document.getElementById('modalDesc').textContent = p.descLonga;

  document.getElementById('modalBeneficios').querySelector('ul').innerHTML = p.beneficios.map(b => `<li>${escapeHtml(b)}</li>`).join('');
  document.getElementById('modalUso').querySelector('p').textContent = p.comoUsar;

  const receitaContainer = document.getElementById('modalReceita');
  const receitaP = receitaContainer.querySelector('p');
  if (p.receita) {
    receitaContainer.style.display = '';
    receitaP.textContent = p.receita;
  } else {
    receitaContainer.style.display = 'none';
  }

  const faqContainer = document.getElementById('modalFAQ');
  const dl = faqContainer.querySelector('dl');
  if (p.faq && p.faq.length > 0) {
    faqContainer.style.display = '';
    dl.innerHTML = p.faq.map(item => `<dt>${escapeHtml(item.q)}</dt><dd>${escapeHtml(item.r)}</dd>`).join('');
  } else {
    faqContainer.style.display = 'none';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal._prevFocus = prevFocus;

  setTimeout(() => {
    modal.querySelector('.modal-close').focus();
  }, 100);
}

function closeModal() {
  const modal = document.getElementById('produtoModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
  if (modal._prevFocus) {
    modal._prevFocus.focus();
  }
}

function gerarSchemaProdutos() {
  const items = produtos.map((p, idx) => ({
    "@type": "Product",
    "@id": `https://amandanaturais.com.br/${p.slug}#product`,
    "name": p.nome,
    "description": p.descLonga || p.desc,
    "image": `https://amandanaturais.com.br/${p.img}`,
    "category": p.categoria,
    "brand": { "@type": "Brand", "name": "Amanda Produtos Naturais" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }));

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": items
  });
  document.head.appendChild(script);
}

function aplicarMascaraTelefone(valor) {
  let nums = valor.replace(/\D/g, '').slice(0, 11);
  if (nums.length <= 2) return `(${nums}`;
  if (nums.length <= 7) return `(${nums.slice(0,2)}) ${nums.slice(2)}`;
  return `(${nums.slice(0,2)}) ${nums.slice(2,7)}-${nums.slice(7)}`;
}

function validarFormulario() {
  const nome = document.getElementById('formNome');
  const email = document.getElementById('formEmail');
  const telefone = document.getElementById('formTelefone');
  const mensagem = document.getElementById('formMensagem');
  let valido = true;

  const campos = [
    { el: nome, id: 'erroNome', teste: () => nome.value.trim().length >= 3, msg: 'O nome deve ter no mínimo 3 caracteres.' },
    { el: email, id: 'erroEmail', teste: () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()), msg: 'Informe um email válido.' },
    { el: telefone, id: 'erroTelefone', teste: () => telefone.value.replace(/\D/g, '').length >= 10, msg: 'O telefone deve possuir DDD.' },
    { el: mensagem, id: 'erroMensagem', teste: () => mensagem.value.trim().length >= 20, msg: 'A mensagem deve ter no mínimo 20 caracteres.' }
  ];

  campos.forEach(c => {
    const erroEl = document.getElementById(c.id);
    c.el.classList.remove('erro', 'sucesso');
    erroEl.classList.remove('visible', 'sucesso-msg');

    if (!c.el.value.trim()) {
      c.el.classList.add('erro');
      erroEl.textContent = 'Este campo é obrigatório.';
      erroEl.classList.add('visible');
      valido = false;
    } else if (!c.teste()) {
      c.el.classList.add('erro');
      erroEl.textContent = c.msg;
      erroEl.classList.add('visible');
      valido = false;
    } else {
      c.el.classList.add('sucesso');
      erroEl.textContent = 'Ok';
      erroEl.classList.add('visible', 'sucesso-msg');
    }
  });

  return valido;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProdutos();
  gerarSchemaProdutos();

  document.getElementById('produtosGrid').addEventListener('click', e => {
    const btn = e.target.closest('.btn-outline');
    if (btn) {
      e.preventDefault();
      openModal(parseInt(btn.dataset.id));
    }
  });

  document.getElementById('pagAnterior').addEventListener('click', () => {
    if (paginaAtual > 1) {
      paginaAtual--;
      renderProdutos();
      window.scrollTo({ top: document.getElementById('produtos').offsetTop - 90, behavior: 'smooth' });
    }
  });

  document.getElementById('pagProximo').addEventListener('click', () => {
    const totalPaginas = Math.ceil(produtos.length / PRODUTOS_POR_PAGINA);
    if (paginaAtual < totalPaginas) {
      paginaAtual++;
      renderProdutos();
      window.scrollTo({ top: document.getElementById('produtos').offsetTop - 90, behavior: 'smooth' });
    }
  });

  document.querySelector('.modal-overlay').addEventListener('click', closeModal);
  document.querySelector('.modal-close').addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    const modal = document.getElementById('produtoModal');
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab' && modal.classList.contains('open')) {
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('navList');
  const navOverlay = document.getElementById('navOverlay');
  const navClose = document.getElementById('navClose');

  function openMenu() {
    hamburger.classList.add('active');
    navList.classList.add('open');
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Fechar menu');
    setTimeout(() => navClose.focus(), 100);
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navList.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menu');
    hamburger.focus();
  }

  hamburger.addEventListener('click', () => {
    if (navList.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navClose.addEventListener('click', closeMenu);
  navOverlay.addEventListener('click', closeMenu);

  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navList.classList.contains('open')) {
      closeMenu();
    }
  });

  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

    document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => observarAnimacao(el));

  const formInicio = Date.now();
  const formTempo = document.getElementById('formTempo');

  const form = document.getElementById('contatoForm');
  form.addEventListener('focusin', () => {
    if (!formTempo.value) {
      formTempo.value = (formInicio / 1000).toFixed(3);
    }
  }, { once: true });

  const telInput = document.getElementById('formTelefone');
  telInput.addEventListener('input', () => {
    telInput.value = aplicarMascaraTelefone(telInput.value);
  });

  const msgInput = document.getElementById('formMensagem');
  const msgCount = document.getElementById('msgCount');
  msgInput.addEventListener('input', () => {
    msgCount.textContent = msgInput.value.length;
    if (msgInput.value.length > 1000) {
      msgInput.value = msgInput.value.slice(0, 1000);
      msgCount.textContent = '1000';
    }
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validarFormulario()) return;

    if (!formTempo.value) {
      formTempo.value = (formInicio / 1000).toFixed(3);
    }

    const btn = document.getElementById('formSubmit');
    const status = document.getElementById('formStatus');
    btn.disabled = true;
    status.className = 'form-status loading visible';
    status.textContent = 'Enviando mensagem...';

    try {
      const res = await fetch('enviar_contato.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: new URLSearchParams(new FormData(form)).toString()
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error('Resposta inválida');
      }

      if (res.ok && data.status === 'ok') {
        btn.disabled = false;
        status.className = 'form-status sucesso visible';
        status.textContent = data.message || 'Mensagem enviada com sucesso!';
        form.reset();
        formTempo.value = '';
        document.querySelectorAll('.form-error').forEach(el => {
          el.classList.remove('visible', 'sucesso-msg');
          el.textContent = '';
        });
        document.querySelectorAll('.contato-form input, .contato-form textarea').forEach(el => {
          el.classList.remove('sucesso', 'erro');
        });
        msgCount.textContent = '0';
      } else {
        btn.disabled = false;
        status.className = 'form-status erro visible';
        status.textContent = data.message || 'Não foi possível enviar a mensagem. Tente novamente.';
      }
    } catch (err) {
      btn.disabled = false;
      status.className = 'form-status erro visible';
      status.textContent = 'Erro de conexão. Tente novamente em instantes.';
    }
  });
});
