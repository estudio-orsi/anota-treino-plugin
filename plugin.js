/* Anota Treino - Biblioteca v2 (Penpot plugin). Reconstrói a biblioteca com auto layout (flex) e componentes aninhados.
   Gerado por build.py — não editar plugin.js direto. */
const DATA = {"colors":[{"name":"background","hex":"#0a0a0a","opacity":1,"path":"","desc":"Fundo das telas"},{"name":"foreground","hex":"#fafafa","opacity":1,"path":"","desc":"Texto principal"},{"name":"card","hex":"#171717","opacity":1,"path":"","desc":"Fundo de cartões"},{"name":"card-foreground","hex":"#fafafa","opacity":1,"path":"","desc":"Texto sobre cartões"},{"name":"popover","hex":"#1f1f1f","opacity":1,"path":"","desc":"Fundo de menus, janelas e painéis"},{"name":"popover-foreground","hex":"#fafafa","opacity":1,"path":"","desc":"Texto sobre menus e janelas"},{"name":"primary","hex":"#e5e5e5","opacity":1,"path":"","desc":"Botão principal (quase branco)"},{"name":"primary-foreground","hex":"#171717","opacity":1,"path":"","desc":"Texto sobre o botão principal"},{"name":"secondary","hex":"#262626","opacity":1,"path":"","desc":"Botão secundário"},{"name":"secondary-foreground","hex":"#fafafa","opacity":1,"path":"","desc":"Texto sobre o secundário"},{"name":"muted","hex":"#262626","opacity":1,"path":"","desc":"Superfícies discretas, trilhos"},{"name":"muted-foreground","hex":"#a1a1a1","opacity":1,"path":"","desc":"Texto de apoio"},{"name":"accent","hex":"#2e2e2e","opacity":1,"path":"","desc":"Fundo ao passar o dedo ou o mouse"},{"name":"accent-foreground","hex":"#fafafa","opacity":1,"path":"","desc":"Texto sobre accent"},{"name":"destructive","hex":"#e5484d","opacity":1,"path":"","desc":"Ações de risco e erros"},{"name":"destructive-foreground","hex":"#fafafa","opacity":1,"path":"","desc":"Texto sobre destructive"},{"name":"border","hex":"#2a2a2a","opacity":1,"path":"","desc":"Bordas e divisórias"},{"name":"input","hex":"#333333","opacity":1,"path":"","desc":"Borda de campos"},{"name":"ring","hex":"#737373","opacity":1,"path":"","desc":"Anel de foco"},{"name":"brand","hex":"#7ab8d9","opacity":1,"path":"app","desc":"Destaque suave do moodboard (azul acinzentado)"},{"name":"brand-foreground","hex":"#0a0a0a","opacity":1,"path":"app","desc":"Texto sobre brand"},{"name":"success","hex":"#6fbf9f","opacity":1,"path":"app","desc":"Confirmações"},{"name":"warning","hex":"#d9b26f","opacity":1,"path":"app","desc":"Avisos"},{"name":"overlay","hex":"#000000","opacity":0.6,"path":"app","desc":"Véu escuro atrás de janelas e painéis"},{"name":"chart-1","hex":"#7ab8d9","opacity":1,"path":"chart","desc":"Gráficos, série 1"},{"name":"chart-2","hex":"#6fbf9f","opacity":1,"path":"chart","desc":"Gráficos, série 2"},{"name":"chart-3","hex":"#a1a1a1","opacity":1,"path":"chart","desc":"Gráficos, série 3"},{"name":"chart-4","hex":"#d9b26f","opacity":1,"path":"chart","desc":"Gráficos, série 4"},{"name":"chart-5","hex":"#525252","opacity":1,"path":"chart","desc":"Gráficos, série 5"}],"typos":[{"key":"display/4xl","path":"display","name":"4xl","size":36,"lh":40,"weight":600,"ls":-0.7,"transform":"none","desc":"Números grandes (streak, volume)"},{"key":"heading/3xl","path":"heading","name":"3xl","size":30,"lh":36,"weight":600,"ls":-0.5,"transform":"none","desc":"Título de página"},{"key":"heading/2xl","path":"heading","name":"2xl","size":24,"lh":32,"weight":600,"ls":-0.3,"transform":"none","desc":"Título de seção"},{"key":"heading/xl","path":"heading","name":"xl","size":20,"lh":28,"weight":600,"ls":-0.2,"transform":"none","desc":"Título de cartão grande"},{"key":"heading/lg","path":"heading","name":"lg","size":18,"lh":28,"weight":600,"ls":0,"transform":"none","desc":"Título de cartão e janela"},{"key":"body/base","path":"body","name":"base","size":16,"lh":24,"weight":400,"ls":0,"transform":"none","desc":"Texto corrido"},{"key":"body/base-medium","path":"body","name":"base-medium","size":16,"lh":24,"weight":500,"ls":0,"transform":"none","desc":"Botões grandes"},{"key":"body/sm","path":"body","name":"sm","size":14,"lh":20,"weight":400,"ls":0,"transform":"none","desc":"Texto padrão dos componentes"},{"key":"body/sm-medium","path":"body","name":"sm-medium","size":14,"lh":20,"weight":500,"ls":0,"transform":"none","desc":"Botões, rótulos, itens"},{"key":"body/xs","path":"body","name":"xs","size":12,"lh":16,"weight":400,"ls":0,"transform":"none","desc":"Legendas e textos pequenos"},{"key":"body/xs-medium","path":"body","name":"xs-medium","size":12,"lh":16,"weight":500,"ls":0,"transform":"none","desc":"Selos e textos pequenos com peso"},{"key":"label/xs","path":"label","name":"xs","size":12,"lh":16,"weight":500,"ls":0.6,"transform":"uppercase","desc":"Sobretítulo em caixa alta"},{"key":"label/2xs","path":"label","name":"2xs","size":10,"lh":14,"weight":500,"ls":0.4,"transform":"uppercase","desc":"Rótulos mínimos (abas, eixos)"}],"icons":{"chevron-left":[{"role":"stroke","d":"M 15 18 L 9 12 L 15 6","closed":false}],"chevron-right":[{"role":"stroke","d":"M 9 18 L 15 12 L 9 6","closed":false}],"chevron-down":[{"role":"stroke","d":"M 6 9 L 12 15 L 18 9","closed":false}],"chevron-up":[{"role":"stroke","d":"M 18 15 L 12 9 L 6 15","closed":false}],"arrow-left":[{"role":"stroke","d":"M 12 19 L 5 12 L 12 5","closed":false},{"role":"stroke","d":"M 19 12 L 5 12","closed":false}],"arrow-right":[{"role":"stroke","d":"M 5 12 L 19 12","closed":false},{"role":"stroke","d":"M 12 5 L 19 12 L 12 19","closed":false}],"plus":[{"role":"stroke","d":"M 5 12 L 19 12","closed":false},{"role":"stroke","d":"M 12 5 L 12 19","closed":false}],"minus":[{"role":"stroke","d":"M 5 12 L 19 12","closed":false}],"x":[{"role":"stroke","d":"M 18 6 L 6 18","closed":false},{"role":"stroke","d":"M 6 6 L 18 18","closed":false}],"check":[{"role":"stroke","d":"M 20 6 L 9 17 L 4 12","closed":false}],"search":[{"role":"stroke","d":"M 21 21 L 16.66 16.66","closed":false},{"role":"stroke","d":"M 19 11 C 19 15.418 15.418 19 11 19 C 6.582 19 3 15.418 3 11 C 3 6.582 6.582 3 11 3 C 15.418 3 19 6.582 19 11 Z","closed":true}],"pencil":[{"role":"stroke","d":"M 21.2 6.8 C 22.305 5.695 22.305 3.905 21.2 2.8 C 20.095 1.695 18.305 1.695 17.2 2.8 L 3.8 16.2 L 2 22 L 7.8 20.2 Z","closed":true}],"share-2":[{"role":"stroke","d":"M 21 5 C 21 6.657 19.657 8 18 8 C 16.343 8 15 6.657 15 5 C 15 3.343 16.343 2 18 2 C 19.657 2 21 3.343 21 5 Z","closed":true},{"role":"stroke","d":"M 9 12 C 9 13.657 7.657 15 6 15 C 4.343 15 3 13.657 3 12 C 3 10.343 4.343 9 6 9 C 7.657 9 9 10.343 9 12 Z","closed":true},{"role":"stroke","d":"M 21 19 C 21 20.657 19.657 22 18 22 C 16.343 22 15 20.657 15 19 C 15 17.343 16.343 16 18 16 C 19.657 16 21 17.343 21 19 Z","closed":true},{"role":"stroke","d":"M 8.6 13.5 L 15.4 17.5","closed":false},{"role":"stroke","d":"M 15.4 6.5 L 8.6 10.5","closed":false}],"share":[{"role":"stroke","d":"M 12 2 L 12 15","closed":false},{"role":"stroke","d":"M 16 6 L 12 2 L 8 6","closed":false},{"role":"stroke","d":"M 4 12 L 4 20 C 4 21.105 4.895 22 6 22 L 18 22 C 19.105 22 20 21.105 20 20 L 20 12","closed":false}],"download":[{"role":"stroke","d":"M 12 15 L 12 3","closed":false},{"role":"stroke","d":"M 7 10 L 12 15 L 17 10","closed":false},{"role":"stroke","d":"M 4 14 L 4 20 C 4 21.105 4.895 22 6 22 L 18 22 C 19.105 22 20 21.105 20 20 L 20 14","closed":false}],"import":[{"role":"stroke","d":"M 12 3 L 12 15","closed":false},{"role":"stroke","d":"M 8 11 L 12 15 L 16 11","closed":false},{"role":"stroke","d":"M 8 5 L 4 5 L 4 21 L 20 21 L 20 5 L 16 5","closed":false}],"copy":[{"role":"stroke","d":"M 10 8 L 20 8 C 21.105 8 22 8.895 22 10 L 22 20 C 22 21.105 21.105 22 20 22 L 10 22 C 8.895 22 8 21.105 8 20 L 8 10 C 8 8.895 8.895 8 10 8 Z","closed":true},{"role":"stroke","d":"M 4 16 C 2.9 16 2 15.1 2 14 L 2 4 C 2 2.9 2.9 2 4 2 L 14 2 C 15.1 2 16 2.9 16 4","closed":false}],"trash-2":[{"role":"stroke","d":"M 3 6 L 21 6","closed":false},{"role":"stroke","d":"M 19 6 L 19 20 C 19 21 18 22 17 22 L 7 22 C 6 22 5 21 5 20 L 5 6","closed":false},{"role":"stroke","d":"M 8 6 L 8 4 C 8 3 9 2 10 2 L 14 2 C 15 2 16 3 16 4 L 16 6","closed":false},{"role":"stroke","d":"M 10 11 L 10 17","closed":false},{"role":"stroke","d":"M 14 11 L 14 17","closed":false}],"log-out":[{"role":"stroke","d":"M 9 21 L 5 21 C 3.895 21 3 20.105 3 19 L 3 5 C 3 3.895 3.895 3 5 3 L 9 3","closed":false},{"role":"stroke","d":"M 16 17 L 21 12 L 16 7","closed":false},{"role":"stroke","d":"M 21 12 L 9 12","closed":false}],"user-plus":[{"role":"stroke","d":"M 13 7 C 13 9.209 11.209 11 9 11 C 6.791 11 5 9.209 5 7 C 5 4.791 6.791 3 9 3 C 11.209 3 13 4.791 13 7 Z","closed":true},{"role":"stroke","d":"M 16 21 L 16 19 C 16 16.791 14.209 15 12 15 L 6 15 C 3.791 15 2 16.791 2 19 L 2 21","closed":false},{"role":"stroke","d":"M 19 8 L 19 14","closed":false},{"role":"stroke","d":"M 22 11 L 16 11","closed":false}],"list":[{"role":"stroke","d":"M 8 6 L 21 6","closed":false},{"role":"stroke","d":"M 8 12 L 21 12","closed":false},{"role":"stroke","d":"M 8 18 L 21 18","closed":false},{"role":"stroke","d":"M 3 6 L 3.01 6","closed":false},{"role":"stroke","d":"M 3 12 L 3.01 12","closed":false},{"role":"stroke","d":"M 3 18 L 3.01 18","closed":false}],"map":[{"role":"stroke","d":"M 14.1 5.1 L 9.9 3 L 3 6 L 3 21 L 9.9 18 L 14.1 20.1 L 21 17 L 21 2 Z","closed":true},{"role":"stroke","d":"M 9.9 3 L 9.9 18","closed":false},{"role":"stroke","d":"M 14.1 5.1 L 14.1 20.1","closed":false}],"home":[{"role":"fill","d":"M 3 10.5 L 12 3 L 21 10.5 L 21 21 L 15 21 L 15 15 L 9 15 L 9 21 L 3 21 Z","closed":true}],"dumbbell":[{"role":"stroke","d":"M 6.5 6.5 L 6.5 17.5","closed":false},{"role":"stroke","d":"M 17.5 6.5 L 17.5 17.5","closed":false},{"role":"stroke","d":"M 3.5 9 L 3.5 15","closed":false},{"role":"stroke","d":"M 20.5 9 L 20.5 15","closed":false},{"role":"stroke","d":"M 6.5 12 L 17.5 12","closed":false}],"clock":[{"role":"fill","d":"M 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 C 17.523 2 22 6.477 22 12 Z","closed":true},{"role":"bg","d":"M 12 6 L 12 12 L 16 14","closed":false}],"users":[{"role":"fill","d":"M 11.5 8 C 11.5 9.933 9.933 11.5 8 11.5 C 6.067 11.5 4.5 9.933 4.5 8 C 4.5 6.067 6.067 4.5 8 4.5 C 9.933 4.5 11.5 6.067 11.5 8 Z","closed":true},{"role":"fill","d":"M 20 8 C 20 9.657 18.657 11 17 11 C 15.343 11 14 9.657 14 8 C 14 6.343 15.343 5 17 5 C 18.657 5 20 6.343 20 8 Z","closed":true},{"role":"fill","d":"M 1.5 20 C 1.5 16 4.5 13.5 8 13.5 C 11.5 13.5 14.5 16 14.5 20 Z","closed":true},{"role":"fill","d":"M 15.5 20 C 15.5 17.5 14.7 15.5 13.3 14.3 C 14.2 13.7 15.5 13.5 17 13.5 C 20.2 13.5 22.5 15.7 22.5 20 Z","closed":true}],"user":[{"role":"fill","d":"M 16.5 7.5 C 16.5 9.985 14.485 12 12 12 C 9.515 12 7.5 9.985 7.5 7.5 C 7.5 5.015 9.515 3 12 3 C 14.485 3 16.5 5.015 16.5 7.5 Z","closed":true},{"role":"fill","d":"M 3.5 22 C 3.5 17 7.3 14 12 14 C 16.7 14 20.5 17 20.5 22 Z","closed":true}],"trophy":[{"role":"stroke","d":"M 6 9 L 4.5 9 C 3.119 9 2 7.881 2 6.5 C 2 5.119 3.119 4 4.5 4 L 6 4","closed":false},{"role":"stroke","d":"M 18 9 L 19.5 9 C 20.881 9 22 7.881 22 6.5 C 22 5.119 20.881 4 19.5 4 L 18 4","closed":false},{"role":"stroke","d":"M 4 22 L 20 22","closed":false},{"role":"stroke","d":"M 10 14.7 L 10 17 C 10 17.6 9.5 18 9 18.2 C 7.8 18.8 7 20.2 7 22","closed":false},{"role":"stroke","d":"M 14 14.7 L 14 17 C 14 17.6 14.5 18 15 18.2 C 16.2 18.8 17 20.2 17 22","closed":false},{"role":"stroke","d":"M 18 2 L 6 2 L 6 9 C 6 12.314 8.686 15 12 15 C 15.314 15 18 12.314 18 9 Z","closed":true}],"timer":[{"role":"stroke","d":"M 10 2 L 14 2","closed":false},{"role":"stroke","d":"M 12 14 L 15 11","closed":false},{"role":"stroke","d":"M 20 14 C 20 18.418 16.418 22 12 22 C 7.582 22 4 18.418 4 14 C 4 9.582 7.582 6 12 6 C 16.418 6 20 9.582 20 14 Z","closed":true}],"flame":[{"role":"stroke","d":"M 12 3 C 12.667 5.667 14 7.833 16 9.5 C 18 11.167 19 13 19 15 C 19 18.866 15.866 22 12 22 C 8.134 22 5 18.866 5 15 C 5 13.918 5.351 12.865 6 12 C 6 13.381 7.119 14.5 8.5 14.5 C 9.881 14.5 11 13.381 11 12 C 11 10 9.5 9 9.5 7 C 9.5 5.667 10.333 4.333 12 3","closed":false}],"heart":[{"role":"stroke","d":"M 19 14 C 20.5 12.5 22 10.8 22 8.5 C 22 5.462 19.538 3 16.5 3 C 14.7 3 13.5 3.5 12 5 C 10.5 3.5 9.3 3 7.5 3 C 4.462 3 2 5.462 2 8.5 C 2 10.8 3.5 12.5 5 14 L 12 21 Z","closed":true}],"trending-up":[{"role":"stroke","d":"M 22 7 L 13.5 15.5 L 8.5 10.5 L 2 17","closed":false},{"role":"stroke","d":"M 16 7 L 22 7 L 22 13","closed":false}],"play":[{"role":"fill","d":"M 6 3 L 6 21 L 21 12 Z","closed":true}],"flag":[{"role":"stroke","d":"M 4 22 L 4 4 C 4 3.685 4.148 3.389 4.4 3.2 C 5.439 2.421 6.702 2 8 2 C 11 2 13 4 15.333 4 C 16.666 4 17.689 3.733 18.4 3.2 C 18.703 2.973 19.108 2.936 19.447 3.106 C 19.786 3.275 20 3.621 20 4 L 20 14 C 20 14.315 19.852 14.611 19.6 14.8 C 18.561 15.579 17.298 16 16 16 C 13 16 11 14 8 14 C 6.524 14 5.1 14.544 4 15.528","closed":false}],"lock":[{"role":"stroke","d":"M 5 11 L 19 11 C 20.105 11 21 11.895 21 13 L 21 20 C 21 21.105 20.105 22 19 22 L 5 22 C 3.895 22 3 21.105 3 20 L 3 13 C 3 11.895 3.895 11 5 11 Z","closed":true},{"role":"stroke","d":"M 7 11 L 7 7 C 7 4.239 9.239 2 12 2 C 14.761 2 17 4.239 17 7 L 17 11","closed":false}],"info":[{"role":"stroke","d":"M 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 C 17.523 2 22 6.477 22 12 Z","closed":true},{"role":"stroke","d":"M 12 16 L 12 12","closed":false},{"role":"stroke","d":"M 12 8 L 12.01 8","closed":false}],"circle-alert":[{"role":"stroke","d":"M 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 C 17.523 2 22 6.477 22 12 Z","closed":true},{"role":"stroke","d":"M 12 8 L 12 12","closed":false},{"role":"stroke","d":"M 12 16 L 12.01 16","closed":false}],"triangle-alert":[{"role":"stroke","d":"M 21.73 18 L 13.73 4 C 13.375 3.373 12.71 2.986 11.99 2.986 C 11.27 2.986 10.605 3.373 10.25 4 L 2.25 18 C 1.891 18.622 1.893 19.388 2.254 20.008 C 2.616 20.628 3.282 21.006 4 21 L 20 21 C 20.714 20.999 21.374 20.618 21.731 19.999 C 22.087 19.38 22.087 18.618 21.73 18","closed":false},{"role":"stroke","d":"M 12 9 L 12 13","closed":false},{"role":"stroke","d":"M 12 17 L 12.01 17","closed":false}],"circle-check":[{"role":"stroke","d":"M 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 C 17.523 2 22 6.477 22 12 Z","closed":true},{"role":"stroke","d":"M 16 9 L 10.5 14.5 L 8 12","closed":false}],"circle-x":[{"role":"stroke","d":"M 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 C 17.523 2 22 6.477 22 12 Z","closed":true},{"role":"stroke","d":"M 15 9 L 9 15","closed":false},{"role":"stroke","d":"M 9 9 L 15 15","closed":false}],"wifi-off":[{"role":"stroke","d":"M 12 20 L 12.01 20","closed":false},{"role":"stroke","d":"M 8.5 16.429 C 10.444 14.523 13.556 14.523 15.5 16.429","closed":false},{"role":"stroke","d":"M 5 12.859 C 6.418 11.469 8.218 10.532 10.17 10.169","closed":false},{"role":"stroke","d":"M 19 12.859 C 18.398 12.269 17.724 11.757 16.993 11.336","closed":false},{"role":"stroke","d":"M 2 8.82 C 3.237 7.714 4.648 6.821 6.177 6.177","closed":false},{"role":"stroke","d":"M 22 8.82 C 18.917 6.063 14.833 4.701 10.712 5.056","closed":false},{"role":"stroke","d":"M 2 2 L 22 22","closed":false}],"refresh-cw":[{"role":"stroke","d":"M 3 12 C 3 7.029 7.029 3 12 3 C 14.516 3.009 16.931 3.991 18.74 5.74 L 21 8","closed":false},{"role":"stroke","d":"M 21 3 L 21 8 L 16 8","closed":false},{"role":"stroke","d":"M 21 12 C 21 16.971 16.971 21 12 21 C 9.484 20.991 7.069 20.009 5.26 18.26 L 3 16","closed":false},{"role":"stroke","d":"M 8 16 L 3 16 L 3 21","closed":false}],"ellipsis":[{"role":"stroke","d":"M 13 12 C 13 12.552 12.552 13 12 13 C 11.448 13 11 12.552 11 12 C 11 11.448 11.448 11 12 11 C 12.552 11 13 11.448 13 12 Z","closed":true},{"role":"stroke","d":"M 20 12 C 20 12.552 19.552 13 19 13 C 18.448 13 18 12.552 18 12 C 18 11.448 18.448 11 19 11 C 19.552 11 20 11.448 20 12 Z","closed":true},{"role":"stroke","d":"M 6 12 C 6 12.552 5.552 13 5 13 C 4.448 13 4 12.552 4 12 C 4 11.448 4.448 11 5 11 C 5.552 11 6 11.448 6 12 Z","closed":true}],"mail":[{"role":"stroke","d":"M 22 7 L 13.009 12.727 C 12.388 13.088 11.621 13.088 11 12.727 L 2 7","closed":false},{"role":"stroke","d":"M 4 4 L 20 4 C 21.105 4 22 4.895 22 6 L 22 18 C 22 19.105 21.105 20 20 20 L 4 20 C 2.895 20 2 19.105 2 18 L 2 6 C 2 4.895 2.895 4 4 4 Z","closed":true}],"award":[{"role":"stroke","d":"M 15.477 12.89 L 16.992 21.416 C 17.027 21.622 16.93 21.827 16.75 21.932 C 16.57 22.036 16.343 22.018 16.182 21.886 L 12.602 19.199 C 12.247 18.934 11.76 18.934 11.405 19.199 L 7.819 21.885 C 7.658 22.017 7.432 22.035 7.252 21.931 C 7.071 21.827 6.975 21.621 7.009 21.416 L 8.523 12.89","closed":false},{"role":"stroke","d":"M 18 8 C 18 11.314 15.314 14 12 14 C 8.686 14 6 11.314 6 8 C 6 4.686 8.686 2 12 2 C 15.314 2 18 4.686 18 8 Z","closed":true}],"calendar":[{"role":"stroke","d":"M 8 2 L 8 5","closed":false},{"role":"stroke","d":"M 16 2 L 16 5","closed":false},{"role":"stroke","d":"M 5 3 L 19 3 C 20.105 3 21 3.895 21 5 L 21 19 C 21 20.105 20.105 21 19 21 L 5 21 C 3.895 21 3 20.105 3 19 L 3 5 C 3 3.895 3.895 3 5 3 Z","closed":true},{"role":"stroke","d":"M 3 9 L 21 9","closed":false}],"clipboard":[{"role":"stroke","d":"M 9 2 L 15 2 C 15.552 2 16 2.448 16 3 L 16 5 C 16 5.552 15.552 6 15 6 L 9 6 C 8.448 6 8 5.552 8 5 L 8 3 C 8 2.448 8.448 2 9 2 Z","closed":true},{"role":"stroke","d":"M 16 4 L 18 4 C 19.105 4 20 4.895 20 6 L 20 20 C 20 21.105 19.105 22 18 22 L 6 22 C 4.895 22 4 21.105 4 20 L 4 6 C 4 4.895 4.895 4 6 4 L 8 4","closed":false}],"layout-grid":[{"role":"stroke","d":"M 4 3 L 9 3 C 9.552 3 10 3.448 10 4 L 10 9 C 10 9.552 9.552 10 9 10 L 4 10 C 3.448 10 3 9.552 3 9 L 3 4 C 3 3.448 3.448 3 4 3 Z","closed":true},{"role":"stroke","d":"M 15 3 L 20 3 C 20.552 3 21 3.448 21 4 L 21 9 C 21 9.552 20.552 10 20 10 L 15 10 C 14.448 10 14 9.552 14 9 L 14 4 C 14 3.448 14.448 3 15 3 Z","closed":true},{"role":"stroke","d":"M 15 14 L 20 14 C 20.552 14 21 14.448 21 15 L 21 20 C 21 20.552 20.552 21 20 21 L 15 21 C 14.448 21 14 20.552 14 20 L 14 15 C 14 14.448 14.448 14 15 14 Z","closed":true},{"role":"stroke","d":"M 4 14 L 9 14 C 9.552 14 10 14.448 10 15 L 10 20 C 10 20.552 9.552 21 9 21 L 4 21 C 3.448 21 3 20.552 3 20 L 3 15 C 3 14.448 3.448 14 4 14 Z","closed":true}],"plus-circle":[{"role":"stroke","d":"M 22 12 C 22 17.523 17.523 22 12 22 C 6.477 22 2 17.523 2 12 C 2 6.477 6.477 2 12 2 C 17.523 2 22 6.477 22 12 Z","closed":true},{"role":"stroke","d":"M 8 12 L 16 12","closed":false},{"role":"stroke","d":"M 12 8 L 12 16","closed":false}]},"iconList":["chevron-left","chevron-right","chevron-down","chevron-up","arrow-left","arrow-right","plus","minus","x","check","search","pencil","share-2","share","download","import","copy","trash-2","log-out","user-plus","list","map","home","dumbbell","clock","users","user","trophy","timer","flame","heart","trending-up","play","flag","lock","info","circle-alert","triangle-alert","circle-check","circle-x","wifi-off","refresh-cw","ellipsis","mail","award","calendar","clipboard","layout-grid","plus-circle"]};
const TARGET_FILE_ID = '110d30a4-9d92-80de-8008-efaa002cf506';
const TARGET_FILE_NAME = 'Anota Treino - Biblioteca';
const UI_URL = 'https://estudio-orsi.github.io/anota-treino-plugin/index.html';
const VERSION_LABEL = 'Antes da v2 (posições fixas)';

// ---------------------------------------------------------------- runtime utils
const LOG = [];
const ERRORS = [];
const STATS = { pages: 0, components: 0, variantSets: 0, variantFallbacks: 0, copies: 0, flexBoards: 0, icons: 0, iconScaleFix: 0 };
let PROGRESS = { done: 0, total: 1 };
function say(msg, extra) {
  LOG.push(msg);
  try { console.log('[Anota Treino v2] ' + msg); } catch (e) {}
  try { penpot.ui.sendMessage(Object.assign({ type: 'progress', msg: msg, done: PROGRESS.done, total: PROGRESS.total }, extra || {})); } catch (e) {}
}
function err(where, e) {
  const m = where + ': ' + (e && e.message ? e.message : String(e));
  ERRORS.push(m);
  try { console.warn('[Anota Treino v2] ' + m); } catch (x) {}
}
const hasTimer = typeof setTimeout === 'function';
const sleep = (ms) => (hasTimer ? new Promise(r => setTimeout(r, ms)) : Promise.resolve());
let opCount = 0;
async function breathe(force) { opCount++; if (force || opCount % 40 === 0) await sleep(0); }
async function waitFor(fn, ms, step) {
  const t0 = Date.now();
  for (;;) {
    let v = null; try { v = fn(); } catch (e) { v = null; }
    if (v) return v;
    if (Date.now() - t0 > (ms || 4000)) return null;
    await sleep(step || 40);
  }
}
function tryDo(where, fn) { try { return fn(); } catch (e) { err(where, e); return undefined; } }
const lib = () => penpot.library.local;

// ---------------------------------------------------------------- tokens
const COL = {};   // name -> LibraryColor
const HEX = {};   // name -> {hex, opacity}
const TYP = {};   // key  -> LibraryTypography
const TYPDEF = {};
for (const c of DATA.colors) HEX[c.name] = c;
for (const t of DATA.typos) TYPDEF[t.key] = t;

function fill(token, op) {
  const c = COL[token];
  let f;
  if (c) { try { f = Object.assign({}, c.asFill()); } catch (e) { f = null; } }
  if (!f) f = { fillColor: HEX[token] ? HEX[token].hex : '#ff00ff', fillOpacity: HEX[token] ? HEX[token].opacity : 1 };
  if (op != null) f.fillOpacity = op * (HEX[token] ? HEX[token].opacity : 1);
  return f;
}
function stroke(token, w, align, o) {
  o = o || {};
  const c = COL[token];
  let s;
  if (c) { try { s = Object.assign({}, c.asStroke()); } catch (e) { s = null; } }
  if (!s) s = { strokeColor: HEX[token] ? HEX[token].hex : '#ff00ff', strokeOpacity: HEX[token] ? HEX[token].opacity : 1 };
  s.strokeWidth = w == null ? 1 : w;
  s.strokeAlignment = align || 'inner';
  s.strokeStyle = o.dashed ? 'dashed' : 'solid';
  if (o.op != null) s.strokeOpacity = o.op;
  if (o.cap) { s.strokeCapStart = o.cap; s.strokeCapEnd = o.cap; }
  return s;
}
const ring = (token, op) => stroke(token || 'ring', 3, 'outer', { op: op == null ? 0.5 : op });
function shadow(y, blur, op, spread) {
  return [{ style: 'drop-shadow', offsetX: 0, offsetY: y, blur: blur, spread: spread || 0, hidden: false, color: { color: '#000000', opacity: op } }];
}
const RADIUS = { sm: 8, md: 10, lg: 12, xl: 16, '2xl': 20, full: 9999 };

// ---------------------------------------------------------------- spec constructors
// F(opts, children) = board with flex layout (dir row/column) unless opts.layout === false
function F(o, kids) { return Object.assign({ t: 'F', kids: (kids || []).filter(Boolean) }, o || {}); }
function T(text, typo, color, o) { return Object.assign({ t: 'T', text: String(text), typo: typo || 'body/sm', color: color || 'foreground' }, o || {}); }
function R(o) { return Object.assign({ t: 'R' }, o || {}); }
function E(o) { return Object.assign({ t: 'E' }, o || {}); }
function P(d, o) { return Object.assign({ t: 'P', d: d }, o || {}); }
function Ic(name, size, color, o) { return Object.assign({ t: 'I', icon: name, size: size || 16, color: color || 'foreground' }, o || {}); }
// C(set, props, o): instance of a component (variant chosen by props). o.texts {layerName: text}, o.icon (swap nested "Icon"), o.iconColor
function C(set, props, o) { return Object.assign({ t: 'C', set: set, props: props || {} }, o || {}); }
const Spacer = (o) => F(Object.assign({ name: 'Spacer', w: 'fill', h: 1 }, o || {}));

// ---------------------------------------------------------------- shape building
function setSizing(s, axis, val) {
  const key = axis === 'h' ? 'horizontalSizing' : 'verticalSizing';
  try { if (s.layoutChild) { s.layoutChild[key] = val; return true; } } catch (e) {}
  try { if (s.flex) { s.flex[key] = val; return true; } } catch (e) {}
  try { s[key] = val; return true; } catch (e) { err('sizing ' + s.name + ' ' + key + '=' + val, e); }
  return false;
}
function pads(p) {
  if (p == null) return [0, 0, 0, 0];
  if (typeof p === 'number') return [p, p, p, p];
  if (p.length === 2) return [p[0], p[1], p[0], p[1]];
  return p;
}
function applyStyle(s, n) {
  if (n.name) s.name = n.name;
  if (n.t !== 'T') {
    const fl = n.fills ? n.fills : (n.fill ? [Array.isArray(n.fill) ? fill(n.fill[0], n.fill[1]) : fill(n.fill)] : []);
    tryDo('fills ' + s.name, () => { s.fills = fl; });
    const st = n.strokes ? n.strokes : (n.stroke ? [typeof n.stroke === 'string' ? stroke(n.stroke) : n.stroke] : []);
    if (st.length || n.t !== 'P') tryDo('strokes ' + s.name, () => { s.strokes = st; });
  }
  if (n.r != null && n.t !== 'E' && n.t !== 'T' && n.t !== 'P') {
    tryDo('radius ' + s.name, () => {
      if (Array.isArray(n.r)) { s.borderRadiusTopLeft = n.r[0]; s.borderRadiusTopRight = n.r[1]; s.borderRadiusBottomRight = n.r[2]; s.borderRadiusBottomLeft = n.r[3]; }
      else s.borderRadius = n.r;
    });
  }
  if (n.op != null && n.op !== 1) tryDo('opacity ' + s.name, () => { s.opacity = n.op; });
  if (n.shadow) tryDo('shadow ' + s.name, () => { s.shadows = n.shadow; });
  if (n.hidden) tryDo('hidden ' + s.name, () => { s.hidden = true; });
}
function placeChild(s, n, parent) {
  if (!parent) return;
  parent.appendChild(s);
  if (n.abs) {
    tryDo('absolute ' + s.name, () => { s.layoutChild.absolute = true; });
    tryDo('zIndex ' + s.name, () => { s.layoutChild.zIndex = n.z != null ? n.z : 1; });
  }
  if (n.x != null || n.y != null) tryDo('pos ' + s.name, () => { s.parentX = n.x || 0; s.parentY = n.y || 0; });
  if (n.alignSelf) tryDo('alignSelf ' + s.name, () => { s.layoutChild.alignSelf = n.alignSelf; });
}
// path data in parent-local coordinates -> absolute (only absolute M/L/C/Z commands are used)
function translateD(d, dx, dy) {
  if (!dx && !dy) return d;
  const tok = d.trim().split(/\s+/);
  const out = []; let idx = 0;
  for (const t of tok) {
    if (/^[A-Za-z]$/.test(t)) { out.push(t); idx = 0; continue; }
    const v = parseFloat(t) + (idx % 2 === 0 ? dx : dy); idx++;
    out.push(String(Math.round(v * 1000) / 1000));
  }
  return out.join(' ');
}
function finishSizing(s, n, isLayout) {
  if (n.w === 'fill') setSizing(s, 'h', 'fill');
  else if (n.w === 'hug' && isLayout) setSizing(s, 'h', 'auto');
  else if (typeof n.w === 'number' && s.layoutChild) tryDo('fixw', () => { s.layoutChild.horizontalSizing = 'fix'; });
  if (n.h === 'fill') setSizing(s, 'v', 'fill');
  else if (n.h === 'hug' && isLayout) setSizing(s, 'v', 'auto');
  else if (typeof n.h === 'number' && s.layoutChild) tryDo('fixh', () => { s.layoutChild.verticalSizing = 'fix'; });
}

function build(n, parent) {
  let s = null;
  switch (n.t) {
    case 'F': {
      s = penpot.createBoard();
      s.name = n.name || 'Frame';
      const w0 = typeof n.w === 'number' ? n.w : 10, h0 = typeof n.h === 'number' ? n.h : 10;
      s.resize(Math.max(w0, 0.01), Math.max(h0, 0.01));
      tryDo('clip ' + s.name, () => { s.clipContent = !!n.clip; });
      applyStyle(s, n);
      placeChild(s, n, parent);
      const isLayout = n.layout !== false;
      if (isLayout) {
        const fl = s.addFlexLayout();
        STATS.flexBoards++;
        fl.dir = n.dir || 'row';
        if (n.wrap) fl.wrap = 'wrap';
        const g = n.gap || 0;
        fl.rowGap = n.rowGap != null ? n.rowGap : g;
        fl.columnGap = n.colGap != null ? n.colGap : g;
        const p = pads(n.p);
        tryDo('padding', () => { fl.topPadding = p[0]; fl.rightPadding = p[1]; fl.bottomPadding = p[2]; fl.leftPadding = p[3]; });
        fl.alignItems = n.ai || 'start';
        fl.justifyContent = n.jc || 'start';
        if (n.wrap) tryDo('alignContent', () => { fl.alignContent = 'start'; });
      }
      for (const k of n.kids) {
        try { build(k, s); } catch (e) { err('build child ' + (k.name || k.t) + ' in ' + s.name, e); }
      }
      if (n.w == null) n.w = isLayout ? 'hug' : w0;
      if (n.h == null) n.h = isLayout ? 'hug' : h0;
      finishSizing(s, n, isLayout);
      break;
    }
    case 'T': {
      s = penpot.createText(n.text);
      if (!s) throw new Error('createText returned null for "' + n.text + '"');
      s.name = n.name || n.text.slice(0, 40);
      const ty = TYP[n.typo];
      if (ty) tryDo('typo ' + n.typo, () => ty.applyToText(s));
      else applyTypoRaw(s, n.typo);
      tryDo('text fill', () => { s.fills = [fill(n.color)]; });
      if (n.align) tryDo('align', () => { s.align = n.align; });
      if (n.decoration) tryDo('decoration', () => { s.textDecoration = n.decoration; });
      if (n.op != null && n.op !== 1) tryDo('opacity', () => { s.opacity = n.op; });
      placeChild(s, n, parent);
      if (n.w === 'fill') {
        tryDo('grow', () => { s.growType = 'auto-height'; });
        setSizing(s, 'h', 'fill');
      } else if (typeof n.w === 'number') {
        tryDo('textw', () => { s.resize(n.w, Math.max(s.height || 10, 1)); });
        tryDo('grow', () => { s.growType = 'auto-height'; });
      } else {
        tryDo('grow', () => { s.growType = 'auto-width'; });
      }
      break;
    }
    case 'R': case 'E': {
      s = n.t === 'R' ? penpot.createRectangle() : penpot.createEllipse();
      s.name = n.name || (n.t === 'R' ? 'Rectangle' : 'Ellipse');
      s.resize(Math.max(typeof n.w === 'number' ? n.w : 10, 0.01), Math.max(typeof n.h === 'number' ? n.h : 10, 0.01));
      applyStyle(s, n);
      placeChild(s, n, parent);
      finishSizing(s, n, false);
      break;
    }
    case 'P': {
      s = penpot.createPath();
      s.name = n.name || 'Path';
      let ox = 0, oy = 0;
      if (parent) { try { ox = parent.x; oy = parent.y; } catch (e) {} }
      setPathD(s, translateD(n.d, ox, oy));
      applyStyle(s, n);
      placeChild(s, Object.assign({}, n, { x: null, y: null }), parent);
      if (parent && n.abs) { let px = 0, py = 0; try { px = parent.x; py = parent.y; } catch (e) {} setPathD(s, translateD(n.d, px, py)); }
      break;
    }
    case 'I': {
      s = iconInstance(n.icon, n.size, n.color, n.name);
      placeChild(s, n, parent);
      if (n.op != null && n.op !== 1) tryDo('icon opacity', () => { s.opacity = n.op; });
      break;
    }
    case 'C': {
      s = instanceOf(n.set, n.props, n);
      placeChild(s, n, parent);
      applyOverrides(s, n);
      finishSizing(s, n, true);
      break;
    }
    default: throw new Error('unknown node ' + n.t);
  }
  return s;
}
function setPathD(s, d) {
  try { s.d = d; return; } catch (e) {}
  try { s.content = d; return; } catch (e) { err('path d', e); }
}
function applyTypoRaw(s, key) {
  const t = TYPDEF[key]; if (!t) return;
  tryDo('raw typo', () => {
    s.fontFamily = 'Inter'; s.fontSize = String(t.size); s.fontWeight = String(t.weight);
    s.lineHeight = String(Math.round(t.lh / t.size * 10000) / 10000); s.letterSpacing = String(t.ls);
    if (t.transform && t.transform !== 'none') s.textTransform = t.transform;
  });
}
function walk(s, fn) {
  fn(s);
  let kids = [];
  try { kids = s.children || []; } catch (e) { kids = []; }
  for (const k of kids) walk(k, fn);
}
function findByName(root, name) {
  let hit = null;
  walk(root, (x) => { if (!hit && x !== root && x.name === name) hit = x; });
  return hit;
}

// ---------------------------------------------------------------- component registry
const ICON = {};   // icon name -> LibraryComponent
const REG = {};    // set name -> [{props, comp}]
const SETDEF = {}; // set name -> {props: [...], defaults: {...}}

function register(set, props, comp) { (REG[set] = REG[set] || []).push({ props: props, comp: comp }); }
function pick(set, want) {
  const list = REG[set];
  if (!list || !list.length) throw new Error('component set not built yet: ' + set);
  const def = (SETDEF[set] && SETDEF[set].defaults) || {};
  const full = Object.assign({}, def, want || {});
  let best = null, bestScore = -1;
  for (const it of list) {
    let sc = 0;
    for (const k in full) if (it.props[k] === full[k]) sc += (k in (want || {})) ? 100 : 1;
    if (sc > bestScore) { bestScore = sc; best = it; }
  }
  for (const k in (want || {})) if (best.props[k] !== want[k]) err('pick ' + set, new Error('no exact variant for ' + k + '=' + want[k]));
  return best.comp;
}

// ---------------------------------------------------------------- icons
function iconMainNode(name) {
  const parts = DATA.icons[name];
  return { name: name, parts: parts };
}
function buildIconMain(name) {
  const b = penpot.createBoard();
  b.name = 'Icon / ' + name;
  b.resize(24, 24);
  b.x = 0; b.y = 0;
  tryDo('icon clip', () => { b.clipContent = false; });
  b.fills = [];
  const parts = DATA.icons[name];
  parts.forEach((pt, i) => {
    const p = penpot.createPath();
    let bx = 0, by = 0; try { bx = b.x; by = b.y; } catch (e) {}
    setPathD(p, translateD(pt.d, bx, by));
    p.name = pt.role + ' ' + (i + 1);
    if (pt.role === 'fill') { p.fills = [fill('foreground')]; p.strokes = []; }
    else {
      p.fills = [];
      p.strokes = [stroke(pt.role === 'bg' ? 'background' : 'foreground', 2, 'center', { cap: pt.closed ? null : 'round' })];
    }
    b.appendChild(p);
    tryDo('icon constraints', () => { p.constraintsHorizontal = 'scale'; p.constraintsVertical = 'scale'; });
  });
  return b;
}
// recolor the vector layers inside an icon instance (override on the copy)
function colorIcon(inst, token, bgToken) {
  walk(inst, (x) => {
    if (x === inst || x.type !== 'path') return;
    const role = (x.name || '').split(' ')[0];
    if (role === 'fill') tryDo('icon fill', () => { x.fills = [fill(token)]; });
    else {
      let w = 2, cap = null;
      try { const st = x.strokes && x.strokes[0]; if (st) { w = st.strokeWidth || 2; cap = st.strokeCapStart || null; } } catch (e) {}
      tryDo('icon stroke', () => { x.strokes = [stroke(role === 'bg' ? (bgToken || 'background') : token, w, 'center', { cap: cap })]; });
    }
  });
}
function scaleIcon(inst, size) {
  if (size === 24) return;
  const before = [];
  walk(inst, (x) => { if (x !== inst) before.push([x, x.width, x.height]); });
  inst.resize(size, size);
  // verify that the vectors scaled with the board (constraints = scale); fix by hand if not
  let ok = true;
  for (const [x, w0] of before) { if (w0 > 0.5 && Math.abs(x.width - w0 * size / 24) > 0.2) { ok = false; break; } }
  if (!ok) {
    STATS.iconScaleFix++;
    const k = size / 24;
    for (const [x, w0, h0] of before) {
      tryDo('icon manual scale', () => {
        const px = x.parentX, py = x.parentY;
        x.resize(Math.max(w0 * k, 0.01), Math.max(h0 * k, 0.01));
        x.parentX = px * k; x.parentY = py * k;
      });
    }
  }
}
function iconInstance(name, size, color, layerName) {
  const comp = ICON[name];
  if (!comp) throw new Error('icon not built: ' + name);
  const inst = comp.instance();
  STATS.copies++;
  if (layerName) inst.name = layerName; else inst.name = 'Icon';
  scaleIcon(inst, size || 24);
  if (color && color !== 'foreground') colorIcon(inst, color, null);
  return inst;
}

// ---------------------------------------------------------------- instances & overrides
function instanceOf(set, props, n) {
  const comp = pick(set, props);
  const inst = comp.instance();
  STATS.copies++;
  if (n && n.name) inst.name = n.name;
  return inst;
}
function applyOverrides(inst, n) {
  if (n.texts) {
    for (const layer in n.texts) {
      const t = findByName(inst, layer);
      if (!t || t.type !== 'text') { err('override text', new Error(n.set + ' has no text layer "' + layer + '"')); continue; }
      tryDo('override ' + layer, () => { t.characters = n.texts[layer]; });
    }
  }
  if (n.icon) queueSwap(inst, n.iconLayer || 'Icon', n.icon, n.iconColor ? { token: n.iconColor, bg: n.iconBg } : null, n.set);
  else if (n.iconColor) {
    const ic = findByName(inst, n.iconLayer || 'Icon');
    if (ic) colorIcon(ic, n.iconColor, n.iconBg);
  }
  if (n.swaps) for (const layer in n.swaps) queueSwap(inst, layer, n.swaps[layer], null, n.set);
  if (n.fillsOverride) tryDo('fills override', () => { inst.fills = n.fillsOverride; });
}

// icon swaps are applied by Penpot asynchronously: queue them, then rename + repaint the new copy
const PENDING = [];
const SWAPPED = new Set();
function iconPaint(ic) {
  const out = {};
  walk(ic, (x) => {
    if (x === ic || x.type !== 'path') return;
    const role = (x.name || '').split(' ')[0];
    try {
      if (role === 'fill' && !out.fill && x.fills && x.fills[0]) out.fill = Object.assign({}, x.fills[0]);
      else if (role === 'bg' && !out.bg && x.strokes && x.strokes[0]) out.bg = Object.assign({}, x.strokes[0]);
      else if (role === 'stroke' && !out.stroke && x.strokes && x.strokes[0]) out.stroke = Object.assign({}, x.strokes[0]);
    } catch (e) {}
  });
  return out;
}
const f2s = (f) => f && { strokeColor: f.fillColor, strokeColorRefId: f.fillColorRefId, strokeColorRefFile: f.fillColorRefFile, strokeOpacity: f.fillOpacity };
const s2f = (s) => s && { fillColor: s.strokeColor, fillColorRefId: s.strokeColorRefId, fillColorRefFile: s.strokeColorRefFile, fillOpacity: s.strokeOpacity };
function clean(o) { const r = {}; for (const k in o) if (o[k] !== undefined && o[k] !== null) r[k] = o[k]; return r; }
function paintIcon(ic, paint) {
  const strokeBase = paint.stroke || f2s(paint.fill), fillBase = paint.fill || s2f(paint.stroke);
  walk(ic, (x) => {
    if (x === ic || x.type !== 'path') return;
    const role = (x.name || '').split(' ')[0];
    if (role === 'fill') { if (fillBase) tryDo('paint fill', () => { x.fills = [clean(fillBase)]; }); return; }
    let w = 2, cap = null;
    try { const st = x.strokes && x.strokes[0]; if (st) { w = st.strokeWidth || 2; cap = st.strokeCapStart || null; } } catch (e) {}
    const base = role === 'bg' ? (paint.bg || null) : strokeBase;
    if (!base) return;
    tryDo('paint stroke', () => { x.strokes = [clean(Object.assign({}, base, { strokeWidth: w, strokeAlignment: 'center', strokeStyle: 'solid', strokeCapStart: cap, strokeCapEnd: cap }))]; });
  });
}
function queueSwap(inst, layer, iconName, color, setName) {
  const ic = findByName(inst, layer);
  const comp = ICON[iconName];
  if (!ic || !comp) { err('swap ' + setName, new Error('layer "' + layer + '" or icon "' + iconName + '" missing')); return; }
  let paint = iconPaint(ic);
  if (color) paint = { stroke: stroke(color.token, 2, 'center'), fill: fill(color.token), bg: color.bg ? stroke(color.bg, 2, 'center') : paint.bg };
  const parent = ic.parent;
  const size = ic.width;
  let same = false; try { const c0 = ic.component(); same = !!(c0 && c0.id === comp.id); } catch (e) {}
  if (same) { if (color) paintIcon(ic, paint); return; }
  try { ic.swapComponent(comp); } catch (e) { err('swapComponent ' + iconName, e); return; }
  PENDING.push({ parent: parent, compId: comp.id, layer: layer, paint: paint, size: size });
}
async function flushPending() {
  while (PENDING.length) {
    const t = PENDING.shift();
    const neu = await waitFor(() => {
      const kids = t.parent && t.parent.children || [];
      for (const k of kids) { try { const c = k.component && k.component(); if (c && c.id === t.compId && !SWAPPED.has(k.id)) return k; } catch (e) {} }
      return null;
    }, 3000);
    if (!neu) { err('swap result', new Error('swapped icon not found for ' + t.layer)); continue; }
    SWAPPED.add(neu.id);
    tryDo('swap rename', () => { neu.name = t.layer; });
    if (t.size && Math.abs(neu.width - t.size) > 0.2) tryDo('swap size', () => scaleIcon(neu, t.size));
    paintIcon(neu, t.paint);
  }
}

// ---------------------------------------------------------------- mains
async function makeMain(fullName, node) {
  const s = build(node, null);
  s.name = fullName;
  await flushPending();
  const comp = lib().createComponent([s]);
  STATS.components++;
  await breathe();
  let main = null;
  try { main = comp.mainInstance(); } catch (e) {}
  return { comp: comp, main: main || s };
}

function known(node, axis) { const v = node[axis]; return typeof v === 'number' ? v : null; }

// Build a variant set. combos: [{props, row, col}] ; make(props) -> node (root F)
async function variantSet(set, propNames, combos, make, opts) {
  opts = opts || {};
  SETDEF[set] = { props: propNames, defaults: opts.defaults || {} };
  const mains = [];
  for (const c of combos) {
    const node = make(c.props);
    if (!node) continue;
    const name = set + ' / ' + propNames.map(p => c.props[p]).join(' / ');
    try {
      const m = await makeMain(name, node);
      mains.push({ main: m.main, comp: m.comp, props: c.props, row: c.row, col: c.col, w: known(node, 'w'), h: known(node, 'h') });
      register(set, c.props, m.comp);
    } catch (e) { err('main ' + name, e); }
  }
  PROGRESS.done++;
  if (!mains.length) throw new Error('no mains for ' + set);
  let vc = null;
  if (mains.length > 1) {
    try {
      const head = mains[0].main;
      const ret = head.combineAsVariants(mains.slice(1).map(m => m.main.id));
      const vid = ret && ret.id;
      vc = await waitFor(() => { const x = vid && penpot.currentPage.getShapeById(vid); return x && x.isVariantContainer && x.isVariantContainer() ? x : null; }, 6000);
      if (!vc) throw new Error('variant container did not appear');
      await sleep(30);
      vc.name = set;
      await fixVariantProps(set, vc, propNames, mains);
      STATS.variantSets++;
    } catch (e) {
      err('combineAsVariants ' + set + ' (fallback: plain components in a frame)', e);
      STATS.variantFallbacks++;
      vc = null;
    }
  }
  const holder = vc || penpot.createBoard();
  if (!vc) { holder.name = set; holder.fills = []; }
  layoutSet(holder, mains, !!vc, opts);
  return holder;
}

async function fixVariantProps(set, vc, propNames, mains) {
  const v = vc.variants;
  if (!v) throw new Error('no variants proxy');
  let n = (v.properties || []).length;
  let guard = 0;
  while (n < propNames.length && guard++ < 10) { v.addProperty(); await sleep(20); n = (vc.variants.properties || []).length; }
  for (let i = 0; i < propNames.length; i++) {
    const cur = vc.variants.properties[i];
    if (cur !== propNames[i]) tryDo('renameProperty ' + set, () => vc.variants.renameProperty(i, propNames[i]));
  }
  await sleep(20);
  // force every value (robust against a different path -> property mapping)
  for (const m of mains) {
    let vp = {};
    try { vp = m.comp.variantProps || {}; } catch (e) {}
    propNames.forEach((p, i) => {
      if (vp[p] !== m.props[p]) tryDo('setVariantProperty ' + set + ' ' + p, () => m.comp.setVariantProperty(i, String(m.props[p])));
    });
  }
  await sleep(20);
  const props = vc.variants.properties || [];
  if (props.join('|') !== propNames.join('|')) err('variant props ' + set, new Error('got [' + props.join(', ') + '] expected [' + propNames.join(', ') + ']'));
}

// Lay out the mains of a set inside its container with flex. Chooses a mode that keeps a tidy grid:
//  - one row of combos  -> row, no wrap
//  - one column         -> column, no wrap
//  - same widths per row in every row (all fixed)     -> row + wrap with exact width
//  - same heights per column in every column (fixed)  -> column + wrap with exact height
//  - otherwise          -> row + wrap, width 1280
function layoutSet(holder, mains, isVariant, opts) {
  const GAP = opts.gap || 24, PAD = 32;
  const rows = [...new Set(mains.map(m => m.row))], cols = [...new Set(mains.map(m => m.col))];
  const cell = {}; mains.forEach(m => { cell[m.row + '|' + m.col] = m; });
  const full = rows.every(r => cols.every(c => cell[r + '|' + c]));
  let mode = 'wrap-free', order = mains.slice(), W = null, H = null;
  const seq = (list, key) => list.map(m => m[key]);
  if (rows.length === 1 || opts.mode === 'row') mode = 'row';
  else if (cols.length === 1 || opts.mode === 'column') mode = 'column';
  else if (full) {
    const byRow = rows.map(r => cols.map(c => cell[r + '|' + c]));
    const byCol = cols.map(c => rows.map(r => cell[r + '|' + c]));
    const rowW = byRow.map(l => seq(l, 'w'));
    const colH = byCol.map(l => seq(l, 'h'));
    const allW = rowW.every(l => l.every(v => v != null)) && rowW.every(l => l.join() === rowW[0].join());
    const allH = colH.every(l => l.every(v => v != null)) && colH.every(l => l.join() === colH[0].join());
    if (allH && !opts.preferRows) {
      mode = 'colwrap'; order = [].concat(...byCol);
      H = PAD * 2 + colH[0].reduce((a, b) => a + b, 0) + GAP * (rows.length - 1) + 1;
    } else if (allW) {
      mode = 'rowwrap'; order = [].concat(...byRow);
      W = PAD * 2 + rowW[0].reduce((a, b) => a + b, 0) + GAP * (cols.length - 1) + 1;
    }
  }
  const fl = holder.addFlexLayout();
  STATS.flexBoards++;
  fl.dir = (mode === 'column' || mode === 'colwrap') ? 'column' : 'row';
  if (mode === 'rowwrap' || mode === 'colwrap' || mode === 'wrap-free') fl.wrap = 'wrap';
  fl.rowGap = GAP; fl.columnGap = mode === 'colwrap' ? GAP + 8 : GAP;
  tryDo('set padding', () => { fl.topPadding = PAD; fl.rightPadding = PAD; fl.bottomPadding = PAD; fl.leftPadding = PAD; });
  fl.alignItems = 'start'; fl.justifyContent = 'start';
  tryDo('alignContent', () => { fl.alignContent = 'start'; });
  if (!isVariant) tryDo('holder stroke', () => { holder.strokes = [stroke('border', 1, 'inner', { dashed: true })]; });
  tryDo('holder radius', () => { holder.borderRadius = 16; });
  tryDo('holder fill', () => { holder.fills = []; });
  for (const m of order) tryDo('order ' + holder.name, () => holder.appendChild(m.main));
  if (mode === 'rowwrap') { holder.resize(W, 100); setSizing(holder, 'h', 'fix'); setSizing(holder, 'v', 'auto'); }
  else if (mode === 'colwrap') { holder.resize(100, H); setSizing(holder, 'v', 'fix'); setSizing(holder, 'h', 'auto'); }
  else if (mode === 'wrap-free') { holder.resize(1280, 100); setSizing(holder, 'h', 'fix'); setSizing(holder, 'v', 'auto'); }
  else { setSizing(holder, 'h', 'auto'); setSizing(holder, 'v', 'auto'); }
  return mode;
}

// single (non-variant) component
async function single(name, node) {
  const m = await makeMain(name, node);
  register(name, {}, m.comp);
  SETDEF[name] = { props: [], defaults: {} };
  PROGRESS.done++;
  return m.main;
}

// helper to build combos from row/col definitions: rows=[[label,{props}]], cols=[[label,{props}]]
function grid(rows, cols, filter) {
  const out = [];
  rows.forEach((r, i) => cols.forEach((c, j) => {
    const p = Object.assign({}, r[1], c[1]);
    if (!filter || filter(p)) out.push({ props: p, row: i, col: j });
  }));
  return out;
}
const one = (vals, key) => vals.map(v => [v, { [key]: v }]);
const NONE = [['', {}]];

// ---------------------------------------------------------------- page framework (all auto layout)
const PAGE_W = 1440, PAD = 80;
const APP_OVER = 'Anota Treino · Library · App component';
let PAGE_FIRST = null; // first page is reused (created during cleanup)

async function newPage(name) {
  let p;
  if (PAGE_FIRST) { p = PAGE_FIRST; PAGE_FIRST = null; }
  else p = penpot.createPage();
  p.name = name;
  await penpot.openPage(p);
  await waitFor(() => penpot.currentPage && penpot.currentPage.id === p.id, 4000);
  STATS.pages++;
  return p;
}
class Doc {
  constructor(name, desc, where, overline) { this.name = name; this.desc = desc; this.where = where; this.overline = overline || 'Anota Treino · Library'; }
  async open() {
    this.pageObj = await newPage(this.name);
    const header = F({ name: 'Header', dir: 'column', gap: 8, w: 'fill' }, [
      T(this.overline, 'label/xs', 'muted-foreground', { name: 'Overline' }),
      T(this.name, 'display/4xl', 'foreground', { name: 'Title' }),
      T(this.desc, 'body/base', 'muted-foreground', { name: 'Description', w: 760 }),
      this.where ? F({ name: 'Where', dir: 'column', gap: 4, p: [12, 0, 0, 0] }, [
        T('Onde aparece no app', 'body/sm-medium', 'foreground', { name: 'Where label' }),
        T(this.where, 'body/sm', 'muted-foreground', { name: 'Where text', w: 760 }),
      ]) : null,
    ]);
    this.board = build(F({ name: this.name + ' — page', dir: 'column', gap: 40, p: [64, PAD, 80, PAD], w: PAGE_W, h: 'hug', fill: 'background', clip: true }, [
      header,
      R({ name: 'Divider', w: 'fill', h: 1, fill: 'border' }),
    ]), null);
    tryDo('page pos', () => { this.board.x = 0; this.board.y = 0; });
    await breathe(true);
    return this;
  }
  // a section: title/desc + content; content can be a node or an existing shape (variant container / main)
  section(title, desc) {
    const s = build(F({ name: 'Section — ' + title, dir: 'column', gap: 20, w: 'fill' }, [
      F({ name: 'Section header', dir: 'column', gap: 4, w: 'fill' }, [
        T(title, 'heading/lg', 'foreground', { name: 'Section title' }),
        desc ? T(desc, 'body/sm', 'muted-foreground', { name: 'Section description', w: 900 }) : null,
      ]),
    ]), this.board);
    this.cur = s;
    return s;
  }
  put(shape) { // move an existing shape (variant container / main / doc frame) into the current section
    const tgt = this.cur || this.board;
    tryDo('put ' + shape.name, () => tgt.appendChild(shape));
    tryDo('put absolute off ' + shape.name, () => { if (shape.layoutChild && shape.layoutChild.absolute) shape.layoutChild.absolute = false; });
    return shape;
  }
  add(node) { return build(node, this.cur || this.board); }
  note(text) { return build(T(text, 'body/sm', 'muted-foreground', { name: 'Note', w: 900 }), this.cur || this.board); }
  async done() { await flushPending(); await breathe(true); }
}

// ---------------------------------------------------------------- foundations
const PAGE_INDEX = [
  ['Fundamentos', ['Colors', 'Typography', 'Spacing', 'Radius & Effects', 'Icons']],
  ['Componentes shadcn', ['Button', 'Badge', 'Avatar', 'Separator', 'Input', 'Textarea', 'Field', 'InputOTP', 'Select', 'DropdownMenu', 'Checkbox',
    'Switch', 'Toggle', 'ToggleGroup', 'Tabs', 'Progress', 'Skeleton', 'Spinner', 'Card', 'Alert', 'Sonner', 'AlertDialog', 'Dialog', 'Drawer',
    'Item', 'Table', 'Chart', 'Empty']],
  ['Componentes do app', ['AppHeader', 'BottomNav', 'StatCard', 'WorkoutCard', 'SetRow', 'NumberStepper', 'RestTimer', 'AchievementTile',
    'LeaderboardRow', 'Steps']],
];

async function pageCover() {
  const d = await new Doc('Cover', 'Biblioteca de componentes do Anota Treino. Os componentes seguem o shadcn/ui (nomes, variantes e estados) com o visual da prancha "Escuro neutro" do moodboard: fundo quase preto, cartões grafite, pouca cor e um destaque azul acinzentado bem suave.').open();
  d.section('Como usar', 'Cada componente tem a própria página. Dentro dela, a moldura de variantes guarda todas as versões; troque tamanho, variante e estado pelo painel do componente. O tamanho padrão é md. Tudo usa auto layout, e os componentes maiores são montados com cópias dos menores (botões, campos, ícones, selos, avatares). Mudou o Button, mudam também os botões dentro de Card, Dialog e WorkoutCard.');
  d.add(F({ name: 'Index', dir: 'row', gap: 24, w: 'fill', ai: 'start' }, PAGE_INDEX.map(([g, items]) =>
    F({ name: 'Index — ' + g, dir: 'column', gap: 16, p: 24, w: 'fill', fill: 'card', stroke: 'border', r: 16 }, [
      T(g, 'heading/lg', 'foreground', { name: 'Group' }),
      F({ name: 'Items', dir: 'row', wrap: true, rowGap: 6, colGap: 0, w: 'fill' }, items.map(it =>
        F({ name: it, dir: 'row', w: 160, layout: true }, [T(it, 'body/sm', 'muted-foreground', { name: 'Name' })]))),
    ]))));
  d.section('Paleta', 'Cores principais da biblioteca, do fundo ao destaque. A cor brand é a única cor de destaque: troque o valor dela nas cores da biblioteca e todo o arquivo acompanha.');
  d.add(F({ name: 'Palette strip', dir: 'row', gap: 8 }, ['background', 'card', 'popover', 'secondary', 'border', 'muted-foreground', 'primary', 'brand', 'success', 'warning', 'destructive'].map(n =>
    F({ name: n, dir: 'column', gap: 8, w: 108 }, [
      R({ name: 'Color', w: 108, h: 72, fill: n, stroke: 'border', r: 12 }),
      T(n, 'body/xs', 'muted-foreground', { name: 'Name' }),
    ]))));
  d.note('Referência visual: prancha "Escuro neutro" do moodboard fitness (Oura, Future, Peloton, Fitbod). Base de tokens: tema escuro "neutral" do shadcn/ui, ajustado com as cores tiradas das imagens. Ícones: o mesmo conjunto do arquivo "Anota Treino - Fluxos" (estilo Lucide).');
  await d.done();
}

async function pageColors() {
  const d = await new Doc('Colors', 'Tokens de cor com os nomes do shadcn/ui. Todos estão salvos como cores da biblioteca, então mudar um token aqui atualiza os componentes que usam ele.').open();
  for (const [title, desc, path] of [['Base', 'Nomes padrão do shadcn/ui, tema escuro neutro.', ''],
    ['App', 'Cores extras para o app: o destaque suave do moodboard (brand), estados de sucesso e aviso e o véu das janelas.', 'app'],
    ['Chart', 'Sequência para gráficos de carga, volume e evolução.', 'chart']]) {
    d.section(title, desc);
    d.add(F({ name: 'Swatches — ' + title, dir: 'row', wrap: true, gap: 24, w: 'fill' }, DATA.colors.filter(c => c.path === path).map(c =>
      F({ name: 'Swatch ' + c.name, dir: 'column', gap: 4, p: [8, 8, 16, 8], w: 236, fill: 'card', stroke: 'border', r: 16 }, [
        R({ name: 'Color', w: 'fill', h: 80, fill: c.name, stroke: 'border', r: 10 }),
        F({ name: 'Text', dir: 'column', gap: 2, p: [8, 8, 0, 8], w: 'fill' }, [
          T(c.name, 'body/sm-medium', 'foreground', { name: 'Name' }),
          T(c.hex.toUpperCase() + (c.opacity !== 1 ? ' · ' + Math.round(c.opacity * 100) + '%' : ''), 'body/xs', 'muted-foreground', { name: 'Hex' }),
          T(c.desc, 'body/xs', 'muted-foreground', { name: 'Description', w: 'fill' }),
        ]),
      ]))));
  }
  await d.done();
}

async function pageTypography() {
  const d = await new Doc('Typography', 'Escala de texto em Inter, seguindo os tamanhos do Tailwind (xs, sm, base, lg, xl, 2xl, 3xl, 4xl). Todas estão salvas como tipografias da biblioteca.').open();
  d.section('Estilos', 'Nome do estilo, exemplo, medidas (peso · tamanho/altura de linha · espaçamento entre letras) e uso.');
  d.add(F({ name: 'Type scale', dir: 'column', gap: 0, w: 'fill' }, DATA.typos.map(t =>
    F({ name: 'Type ' + t.key, dir: 'row', gap: 20, ai: 'center', p: [12, 0], w: 'fill', strokes: [] }, [
      T(t.key, 'body/sm-medium', 'foreground', { name: 'Name', w: 200 }),
      T(t.size < 30 ? 'The quick brown fox jumps' : 'Workout summary', t.key, 'foreground', { name: 'Sample', w: 620 }),
      T('Inter ' + t.weight + ' · ' + t.size + '/' + t.lh + ' · ' + t.ls, 'body/xs', 'muted-foreground', { name: 'Specs', w: 180 }),
      T(t.desc, 'body/xs', 'muted-foreground', { name: 'Usage', w: 'fill' }),
    ]))));
  await d.done();
}

async function pageSpacing() {
  const d = await new Doc('Spacing', 'Escala de espaçamento do Tailwind, em múltiplos de 4 px. Use estes valores para margens, respiros internos e distâncias entre elementos.').open();
  d.section('Escala');
  d.add(F({ name: 'Scale', dir: 'column', gap: 12 }, [['0.5', 2], ['1', 4], ['1.5', 6], ['2', 8], ['3', 12], ['4', 16], ['5', 20], ['6', 24], ['8', 32], ['10', 40], ['12', 48], ['16', 64], ['20', 80]].map(([n, px]) =>
    F({ name: 'Space ' + n, dir: 'row', gap: 20, ai: 'center', h: 24 }, [
      T('spacing-' + n, 'body/sm-medium', 'foreground', { name: 'Token', w: 120 }),
      T(px + ' px', 'body/xs', 'muted-foreground', { name: 'Value', w: 80 }),
      R({ name: 'Bar', w: px * 4, h: 16, fill: 'brand', r: 4 }),
    ]))));
  d.section('Uso no app');
  d.note('Margem lateral das telas: 6 (24 px). Respiro interno de cartões: 4 ou 5 (16 a 20 px). Distância entre cartões: 3 (12 px). Distância entre título e conteúdo: 2 (8 px). Altura mínima de áreas de toque: 10 (40 px). Nos componentes, esses valores estão aplicados como espaçamento do auto layout.');
  await d.done();
}

async function pageRadius() {
  const d = await new Doc('Radius & Effects', 'Raios de canto e efeitos. O raio base (radius) é 12 px; os outros saem dele, como no shadcn/ui. Botões e selos usam canto totalmente arredondado, como nos apps do moodboard.').open();
  d.section('Radius');
  const notes = { 'radius-md': ' · campos', 'radius-xl': ' · cartões', 'radius-2xl': ' · janelas', 'radius-full': ' · botões' };
  d.add(F({ name: 'Radius scale', dir: 'row', gap: 48 }, [['radius-sm', 8], ['radius-md', 10], ['radius-lg', 12], ['radius-xl', 16], ['radius-2xl', 20], ['radius-full', 9999]].map(([n, r]) =>
    F({ name: n, dir: 'column', gap: 8 }, [
      R({ name: 'Box', w: 120, h: 120, fill: 'card', stroke: 'border', r: r }),
      T(n, 'body/sm-medium', 'foreground', { name: 'Name' }),
      T((r > 999 ? '9999 px' : r + ' px') + (notes[n] || ''), 'body/xs', 'muted-foreground', { name: 'Value' }),
    ]))));
  d.section('Shadows', 'No escuro a sombra é discreta; ela separa menus, janelas e avisos do fundo.');
  d.add(F({ name: 'Shadow scale', dir: 'row', gap: 48 }, [['shadow-sm', shadow(1, 2, 0.4)], ['shadow-md', shadow(4, 12, 0.45)], ['shadow-lg', shadow(12, 32, 0.55)]].map(([n, sh]) =>
    F({ name: n, dir: 'column', gap: 16 }, [
      R({ name: 'Box', w: 200, h: 120, fill: 'popover', stroke: 'border', r: 16, shadow: sh }),
      T(n, 'body/sm-medium', 'foreground', { name: 'Name' }),
    ]))));
  d.section('Focus ring e overlay', 'Anel de foco: borda ring + anel externo de 3 px com 50% de opacidade. Overlay: véu preto com 60% atrás de janelas e painéis.');
  d.add(F({ name: 'Examples', dir: 'row', gap: 60, ai: 'center' }, [
    F({ name: 'Focus example', dir: 'row', ai: 'center', p: [0, 12], w: 240, h: 40, fill: 'card', strokes: [stroke('ring'), ring()], r: 10 }, [
      T('Focus ring', 'body/sm', 'foreground', { name: 'Text' })]),
    F({ name: 'Overlay example', dir: 'column', p: 20, w: 240, h: 120, fill: 'card', stroke: 'border', r: 16, clip: true }, [
      T('Content behind', 'body/sm', 'foreground', { name: 'Under text' }),
      R({ name: 'Overlay', w: 240, h: 120, fill: 'overlay', abs: true, x: 0, y: 0 }),
    ]),
  ]));
  await d.done();
}

async function pageIcons() {
  const d = await new Doc('Icons', 'Mesmo conjunto de ícones do arquivo "Anota Treino - Fluxos", no estilo Lucide: traço de 2 px em grade de 24 px. Cada ícone é um componente (Icon / nome) e é usado como cópia dentro dos botões, itens e cartões.').open();
  d.section('Icon', 'Para trocar um ícone dentro de um componente, use a troca de componente (swap) na camada Icon. Para trocar a cor, mude a cor do traço ou do preenchimento na cópia.');
  const wrap = d.add(F({ name: 'Icon grid', dir: 'row', wrap: true, gap: 16, w: 'fill' }, []));
  for (const name of DATA.iconList) {
    const tile = build(F({ name: 'Tile ' + name, dir: 'column', gap: 12, ai: 'center', jc: 'center', p: [20, 4, 12, 4], w: 112, h: 96, fill: 'card', stroke: 'border', r: 12 }, []), wrap);
    const main = buildIconMain(name);
    const comp = lib().createComponent([main]);
    STATS.components++; STATS.icons++;
    ICON[name] = comp;
    let m = null; try { m = comp.mainInstance(); } catch (e) {}
    tryDo('icon into tile', () => tile.appendChild(m || main));
    build(T(name, 'body/xs', 'muted-foreground', { name: 'Name' }), tile);
    await breathe();
  }
  PROGRESS.done++;
  d.note('Ícones preenchidos (home, clock, users, user) vêm do arquivo de fluxos e são usados na barra de navegação.');
  // IconCircle: icon inside a round background, used by Empty, AlertDialog, Dialog and WorkoutCard
  d.section('IconCircle', 'Ícone dentro de um círculo. Usado no topo de Empty, AlertDialog, Dialog e WorkoutCard.');
  const TONE = { muted: ['muted', null, 'foreground', 'circle-alert'], destructive: ['destructive', 0.15, 'destructive', 'trash-2'], success: ['success', 0.15, 'success', 'check'] };
  const SZ = { sm: [44, 20], md: [48, 22], lg: [56, 26] };
  const vc = await variantSet('IconCircle', ['Tone', 'Size'], grid(one(['muted', 'destructive', 'success'], 'Tone'), one(['sm', 'md', 'lg'], 'Size')), (p) => {
    const [bg, bop, fg, ic] = TONE[p.Tone]; const [dd, isz] = SZ[p.Size];
    return F({ dir: 'row', ai: 'center', jc: 'center', w: dd, h: dd, fill: [bg, bop], r: 9999 }, [Ic(ic, isz, fg)]);
  }, { defaults: { Tone: 'muted', Size: 'md' } });
  d.put(vc);
  await d.done();
}

// ---------------------------------------------------------------- shadcn: base components
const BTN = {
  default: { fill: 'primary', text: 'primary-foreground' },
  secondary: { fill: 'secondary', text: 'secondary-foreground' },
  outline: { fill: 'background', stroke: 'input', text: 'foreground' },
  ghost: { fill: null, text: 'foreground' },
  destructive: { fill: 'destructive', text: 'destructive-foreground' },
  link: { fill: null, text: 'foreground' },
};
const BSIZE = { sm: [32, 12, 'body/sm-medium', 16], md: [40, 16, 'body/sm-medium', 16], lg: [48, 24, 'body/base-medium', 18], icon: [40, 0, null, 18] };
const STATES4 = ['default', 'hover', 'focus', 'disabled'];

function buttonNode(p) {
  const v = p.Variant, s = p.Size, ic = p.Icon, st = p.State;
  const [h, px, typo, isz] = BSIZE[s];
  const sty = BTN[v], col = sty.text;
  let fl = sty.fill ? [fill(sty.fill)] : [];
  let strokes = sty.stroke ? [stroke(sty.stroke)] : [];
  let r = 9999;
  if (st === 'hover') {
    if (v === 'default' || v === 'destructive') fl = [fill(sty.fill, 0.9)];
    else if (v === 'secondary' || v === 'outline' || v === 'ghost') fl = [fill('accent')];
  }
  if (st === 'focus' && v !== 'link') strokes = [stroke('ring'), ring(v === 'destructive' ? 'destructive' : 'ring', 0.5)];
  if (st === 'focus' && v === 'link') { strokes = [stroke('ring', 2, 'outer', { op: 0.5 })]; r = 4; }
  const kids = s === 'icon' ? [Ic('plus', isz, col, { name: 'Icon' })] : [
    ic === 'left' ? Ic('plus', isz, col, { name: 'Icon' }) : null,
    T('Button', typo, col, { name: 'Label', decoration: v === 'link' && st === 'hover' ? 'underline' : null }),
    ic === 'right' ? Ic('arrow-right', isz, col, { name: 'Icon right' }) : null,
  ];
  return F({ dir: 'row', gap: 8, ai: 'center', jc: 'center', p: [0, px], h: h, w: s === 'icon' ? h : 'hug', fills: fl, strokes: strokes, r: r, op: st === 'disabled' ? 0.5 : 1 }, kids);
}
// shorthand for button copies inside composites
function Btn(label, variant, o) {
  o = o || {};
  const props = { Variant: variant || 'default', Size: o.size || 'md', Icon: o.iconPos || (o.icon ? 'left' : 'none'), State: o.state || 'default' };
  const n = C('Button', props, { name: o.name || ('Button ' + label), texts: label ? { Label: label } : null, w: o.w });
  if (o.icon && o.icon !== 'plus' && props.Icon === 'left') n.icon = o.icon;
  if (o.icon && props.Size === 'icon') n.icon = o.icon;
  return n;
}

async function pageButton() {
  const d = await new Doc('Button', 'Botão do shadcn/ui no visual escuro neutro: o principal é quase branco com texto escuro, como nos apps do moodboard. Canto totalmente arredondado. Tamanho padrão: md (40 px de altura). O texto e o ícone ficam em auto layout, então o botão cresce com o texto.',
    'Iniciar treino, Salvar, Entrar, Continuar, Compartilhar, Importar, Adicionar, Gerar código, Finalizar treino, Abandonar (destructive), Cancelar e Agora não (ghost), Já tenho conta (link), botão do cronômetro (icon).').open();
  d.section('Variant × Size × Icon / State', 'Variantes: default, secondary, outline, ghost, destructive, link. Tamanhos: sm, md, lg e icon (quadrado). Icon left e Icon right só no tamanho md. Cada coluna é um State (default, hover, focus, disabled). Para trocar o ícone, use a troca de componente na camada Icon.');
  const rows = [];
  for (const v of ['default', 'secondary', 'outline', 'ghost', 'destructive', 'link']) {
    for (const s of ['sm', 'md', 'lg', 'icon']) {
      if (v === 'link' && s === 'icon') continue;
      rows.push([v + ' · ' + s, { Variant: v, Size: s, Icon: 'none' }]);
      if (s === 'md' && v !== 'link') { rows.push([v + ' · md · left', { Variant: v, Size: 'md', Icon: 'left' }]); rows.push([v + ' · md · right', { Variant: v, Size: 'md', Icon: 'right' }]); }
    }
  }
  const vc = await variantSet('Button', ['Variant', 'Size', 'Icon', 'State'], grid(rows, one(STATES4, 'State')), buttonNode,
    { defaults: { Variant: 'default', Size: 'md', Icon: 'none', State: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageBadge() {
  const d = await new Doc('Badge', 'Selo pequeno para status e destaques. Formato de pílula; a largura acompanha o texto.', 'ATIVO (plano), VOCÊ (ranking), ECONOMIZE (oferta de vidas), +1 nível, contagem de XP, Novo.').open();
  d.section('Variant');
  const sty = { default: ['primary', null, 'primary-foreground'], secondary: ['secondary', null, 'secondary-foreground'], outline: [null, 'border', 'foreground'],
    destructive: ['destructive', null, 'destructive-foreground'], brand: ['brand', null, 'brand-foreground'], success: ['success', null, 'background'] };
  const vc = await variantSet('Badge', ['Variant'], grid(NONE, one(Object.keys(sty), 'Variant')), (p) => {
    const [f, s, t] = sty[p.Variant];
    return F({ dir: 'row', ai: 'center', jc: 'center', p: [3, 9], h: 22, fill: f, stroke: s || null, r: 9999 }, [T('Badge', 'body/xs-medium', t, { name: 'Label' })]);
  }, { defaults: { Variant: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageAvatar() {
  const d = await new Doc('Avatar', 'Foto ou iniciais da pessoa em círculo.', 'Cabeçalho da Home (NA), Perfil, cartões de amigo, ranking, painel do personal.').open();
  d.section('Size / Type');
  const D = { sm: 32, md: 40, lg: 56 };
  const vc = await variantSet('Avatar', ['Size', 'Type'], grid(one(['sm', 'md', 'lg'], 'Size'), one(['initials', 'icon'], 'Type')), (p) => {
    const dd = D[p.Size];
    return F({ dir: 'row', ai: 'center', jc: 'center', w: dd, h: dd, fill: 'secondary', stroke: 'border', r: 9999, clip: true }, [
      p.Type === 'initials' ? T('AB', p.Size === 'lg' ? 'heading/lg' : (p.Size === 'md' ? 'body/sm-medium' : 'body/xs-medium'), 'foreground', { name: 'Initials' })
        : Ic('user', dd / 2, 'muted-foreground', { name: 'Icon' })]);
  }, { defaults: { Size: 'md', Type: 'initials' } });
  d.put(vc);
  await d.done();
}

async function pageSeparator() {
  const d = await new Doc('Separator', 'Linha fina para separar blocos. A versão label leva um texto no meio.', 'Divisória "ou" entre Entrar e Entrar com Google, separação de seções em cartões e listas.').open();
  d.section('Orientation', 'Dentro de outros componentes, a linha horizontal ocupa a largura toda (fill).');
  const vc = await variantSet('Separator', ['Orientation'], grid(NONE, one(['horizontal', 'vertical', 'label'], 'Orientation')), (p) => {
    if (p.Orientation === 'horizontal') return F({ w: 280, h: 1, fill: 'border' }, []);
    if (p.Orientation === 'vertical') return F({ w: 1, h: 40, fill: 'border' }, []);
    return F({ dir: 'row', gap: 12, ai: 'center', w: 280, h: 16 }, [
      R({ name: 'Line left', w: 'fill', h: 1, fill: 'border' }), T('or', 'body/xs', 'muted-foreground', { name: 'Label' }), R({ name: 'Line right', w: 'fill', h: 1, fill: 'border' })]);
  }, { defaults: { Orientation: 'horizontal' } });
  d.put(vc);
  await d.done();
}

function inputNode(size, state, text, filled) {
  const H = { sm: 32, md: 40, lg: 48 }[size];
  let strokes = [stroke('input')];
  if (state === 'focus') strokes = [stroke('ring'), ring()];
  if (state === 'error') strokes = [stroke('destructive'), ring('destructive', 0.35)];
  return F({ dir: 'row', ai: 'center', p: [0, 12], w: 280, h: H, fill: 'card', strokes: strokes, r: RADIUS.md, op: state === 'disabled' ? 0.5 : 1 }, [
    T(text, size === 'lg' ? 'body/base' : 'body/sm', filled ? 'foreground' : 'muted-foreground', { name: 'Value', w: 'fill' })]);
}
async function pageInput() {
  const d = await new Doc('Input', 'Campo de texto de uma linha. Fundo grafite, borda discreta e anel de foco cinza. Tamanho padrão: md (40 px).', 'Login (usuário e senha), Criar conta (e-mail), Editar perfil, Filtrar exercícios, Nome do protocolo, Código de convite e de importação.').open();
  d.section('State / Size', 'Cada coluna é um Size (sm, md, lg). O texto da camada Value pode ser trocado em cada cópia.');
  const vc = await variantSet('Input', ['State', 'Size'], grid(one(['default', 'focus', 'filled', 'error', 'disabled'], 'State'), one(['sm', 'md', 'lg'], 'Size')), (p) => {
    const f = p.State === 'filled' || p.State === 'error';
    return inputNode(p.Size, p.State, f ? 'Value' : 'Placeholder', f);
  }, { defaults: { State: 'default', Size: 'md' }, preferRows: true });
  d.put(vc);
  await d.done();
}

async function pageTextarea() {
  const d = await new Doc('Textarea', 'Campo de texto com várias linhas.', 'Observações do treino (opcional).').open();
  d.section('State');
  const vc = await variantSet('Textarea', ['State'], grid(NONE, one(['default', 'focus', 'filled', 'disabled'], 'State')), (p) => {
    const f = p.State === 'filled';
    return F({ dir: 'column', p: [10, 12], w: 260, h: 96, fill: 'card', strokes: p.State === 'focus' ? [stroke('ring'), ring()] : [stroke('input')], r: RADIUS.md, op: p.State === 'disabled' ? 0.5 : 1 }, [
      T(f ? 'Felt strong today. Increase the weight next time.' : 'Write a note...', 'body/sm', f ? 'foreground' : 'muted-foreground', { name: 'Value', w: 'fill' })]);
  }, { defaults: { State: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageField() {
  const d = await new Doc('Field', 'Rótulo + campo + texto de ajuda ou de erro, montados juntos. O Field usa cópias do Label, do Input e do ícone de alerta. Inclui também o componente Label sozinho.', 'Editar perfil (Nome, Telefone, Peso, Altura), Nome do protocolo, Nome do dia, Código de convite com erro.').open();
  d.section('Label', 'Texto de rótulo dos campos. Estado disabled com 50% de opacidade.');
  const lv = await variantSet('Label', ['State'], grid(NONE, one(['default', 'disabled'], 'State')), (p) =>
    F({ dir: 'row', ai: 'center', op: p.State === 'disabled' ? 0.5 : 1 }, [T('Label', 'body/sm-medium', 'foreground', { name: 'Text' })]), { defaults: { State: 'default' } });
  d.put(lv);
  d.section('Field / State');
  const fv = await variantSet('Field', ['State'], grid(NONE, one(['default', 'error', 'disabled'], 'State')), (p) => {
    const e = p.State === 'error';
    return F({ dir: 'column', gap: 8, w: 300, op: p.State === 'disabled' ? 0.5 : 1 }, [
      C('Label', { State: 'default' }, { name: 'Label' }),
      C('Input', { State: e ? 'error' : 'default', Size: 'md' }, { name: 'Input', w: 'fill', texts: { Value: e ? 'Value' : 'Placeholder' } }),
      e ? F({ name: 'Error', dir: 'row', gap: 6, ai: 'center', w: 'fill' }, [Ic('circle-alert', 14, 'destructive', { name: 'Icon' }), T('This field is invalid.', 'body/xs', 'destructive', { name: 'Message', w: 'fill' })])
        : T('Helper text goes here.', 'body/xs', 'muted-foreground', { name: 'Description', w: 'fill' }),
    ]);
  }, { defaults: { State: 'default' } });
  d.put(fv);
  await d.done();
}

async function pageOTP() {
  const d = await new Doc('InputOTP', 'Campo de código com casas separadas, uma letra ou número por casa. Cada casa é uma cópia do InputOTPSlot.', 'Código de convite de amigo (FX9K2R), importar protocolo por código, vincular personal (8 caracteres).').open();
  d.section('InputOTPSlot / State', 'Uma casa do código.');
  const sv = await variantSet('InputOTPSlot', ['State'], grid(NONE, one(['default', 'active', 'filled', 'error'], 'State')), (p) => {
    const st = p.State;
    const strokes = st === 'active' ? [stroke('ring'), ring()] : (st === 'error' ? [stroke('destructive')] : [stroke('input')]);
    return F({ dir: 'row', ai: 'center', jc: 'center', w: 44, h: 52, fill: 'card', strokes: strokes, r: RADIUS.md }, [
      st === 'filled' || st === 'error' ? T('A', 'heading/lg', 'foreground', { name: 'Char' }) : (st === 'active' ? R({ name: 'Caret', w: 1, h: 20, fill: 'foreground' }) : null)]);
  }, { defaults: { State: 'default' } });
  d.put(sv);
  d.section('InputOTP / State × Length', 'Comprimento 6 ou 8 casas.');
  const chars = 'AB12CD34';
  const vc = await variantSet('InputOTP', ['State', 'Length'], grid(one(['default', 'active', 'filled', 'error', 'disabled'], 'State'), one(['6', '8'], 'Length')), (p) => {
    const n = +p.Length, st = p.State;
    const kids = [];
    for (let k = 0; k < n; k++) {
      const ss = st === 'active' ? (k === 0 ? 'active' : 'default') : (st === 'filled' || st === 'error' ? st : 'default');
      kids.push(C('InputOTPSlot', { State: ss }, { name: 'Slot ' + (k + 1), texts: ss === 'filled' || ss === 'error' ? { Char: chars[k] } : null }));
    }
    return F({ dir: 'row', gap: 8, ai: 'center', h: 52, op: st === 'disabled' ? 0.5 : 1 }, kids);
  }, { defaults: { State: 'default', Length: '6' } });
  d.put(vc);
  await d.done();
}

async function pageSelect() {
  const d = await new Doc('Select', 'Caixa de seleção. Fechada mostra o valor e a seta; aberta mostra a lista de opções em um painel. As opções são cópias do SelectItem.', 'Escolha de ranking (Volume semanal / Por exercício), filtros de dia do protocolo e escolhas de zona de treino.').open();
  d.section('SelectItem / State');
  const iv = await variantSet('SelectItem', ['State'], grid(NONE, one(['default', 'hover', 'selected'], 'State')), (p) =>
    F({ dir: 'row', ai: 'center', gap: 8, p: [0, 8], w: 232, h: 36, fill: p.State === 'hover' ? 'accent' : null, r: RADIUS.sm }, [
      T('Option', 'body/sm', 'foreground', { name: 'Label', w: 'fill' }),
      p.State === 'selected' ? Ic('check', 16, 'foreground', { name: 'Icon' }) : null]), { defaults: { State: 'default' } });
  d.put(iv);
  d.section('Select / Size × State');
  const vc = await variantSet('Select', ['Size', 'State'], grid(one(['sm', 'md'], 'Size'), one(['default', 'focus', 'open', 'disabled'], 'State')), (p) => {
    const th = p.Size === 'sm' ? 32 : 40, open = p.State === 'open';
    const trig = F({ name: 'Trigger', dir: 'row', ai: 'center', gap: 8, p: [0, 12], w: 'fill', h: th, fill: 'card', strokes: p.State === 'focus' || open ? [stroke('ring'), ring()] : [stroke('input')], r: RADIUS.md }, [
      T('Option 1', 'body/sm', 'foreground', { name: 'Value', w: 'fill' }), Ic(open ? 'chevron-up' : 'chevron-down', 16, 'muted-foreground', { name: 'Icon' })]);
    const content = open ? F({ name: 'Content', dir: 'column', p: 4, w: 'fill', fill: 'popover', stroke: 'border', r: RADIUS.md, shadow: shadow(4, 12, 0.45) }, [
      C('SelectItem', { State: 'selected' }, { name: 'Option 1', w: 'fill', texts: { Label: 'Option 1' } }),
      C('SelectItem', { State: 'hover' }, { name: 'Option 2', w: 'fill', texts: { Label: 'Option 2' } }),
      C('SelectItem', { State: 'default' }, { name: 'Option 3', w: 'fill', texts: { Label: 'Option 3' } })]) : null;
    return F({ dir: 'column', gap: 4, w: 240, op: p.State === 'disabled' ? 0.5 : 1 }, [trig, content]);
  }, { defaults: { Size: 'md', State: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageDropdown() {
  const d = await new Doc('DropdownMenu', 'Menu que abre a partir de um botão, com ações. A ação de risco fica por último, em vermelho. O menu completo usa cópias do DropdownMenuItem e do Separator.', 'Menu de mais opções (⋯) em cartões de amigo, protocolo e sessão: editar, compartilhar, copiar, remover.').open();
  d.section('DropdownMenuItem / Variant × State');
  const iv = await variantSet('DropdownMenuItem', ['Variant', 'State'], grid(one(['default', 'destructive'], 'Variant'), one(['default', 'hover', 'disabled'], 'State')), (p) => {
    const col = p.Variant === 'destructive' ? 'destructive' : 'foreground';
    return F({ dir: 'row', ai: 'center', gap: 8, p: [0, 8], w: 220, h: 36, fill: p.State === 'hover' ? 'accent' : null, r: RADIUS.sm, op: p.State === 'disabled' ? 0.5 : 1 }, [
      Ic(p.Variant === 'destructive' ? 'trash-2' : 'pencil', 16, col, { name: 'Icon' }), T(p.Variant === 'destructive' ? 'Delete' : 'Edit', 'body/sm', col, { name: 'Label', w: 'fill' })]);
  }, { defaults: { Variant: 'default', State: 'default' } });
  d.put(iv);
  d.section('DropdownMenu', 'Painel completo com rótulo, itens, divisória e ação de risco.');
  const m = await single('DropdownMenu', F({ dir: 'column', p: 4, w: 228, fill: 'popover', stroke: 'border', r: RADIUS.md, shadow: shadow(4, 12, 0.45) }, [
    F({ name: 'Menu label', dir: 'row', ai: 'center', p: [0, 8], h: 32, w: 'fill' }, [T('Actions', 'label/xs', 'muted-foreground', { name: 'Label' })]),
    C('DropdownMenuItem', { Variant: 'default', State: 'hover' }, { name: 'Item Edit', w: 'fill', texts: { Label: 'Edit' } }),
    C('DropdownMenuItem', { Variant: 'default', State: 'default' }, { name: 'Item Share', w: 'fill', texts: { Label: 'Share' }, icon: 'share-2' }),
    C('DropdownMenuItem', { Variant: 'default', State: 'default' }, { name: 'Item Copy', w: 'fill', texts: { Label: 'Copy plan' }, icon: 'copy' }),
    F({ name: 'Separator wrap', dir: 'row', p: [4, 0], w: 'fill' }, [C('Separator', { Orientation: 'horizontal' }, { name: 'Separator', w: 'fill' })]),
    C('DropdownMenuItem', { Variant: 'destructive', State: 'default' }, { name: 'Item Remove', w: 'fill', texts: { Label: 'Remove' } }),
  ]));
  d.put(m);
  await d.done();
}

// ---------------------------------------------------------------- shadcn: controls
function arcD(cx, cy, r, a0, a1) {
  const n = Math.max(1, Math.ceil(Math.abs(a1 - a0) / (Math.PI / 2)));
  const da = (a1 - a0) / n, k = 4 / 3 * Math.tan(da / 4);
  const f = (v) => (Math.round(v * 1000) / 1000).toString();
  let x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
  let d = 'M ' + f(x0) + ' ' + f(y0);
  for (let i = 0; i < n; i++) {
    const b0 = a0 + i * da, b1 = b0 + da;
    const x1 = cx + r * Math.cos(b1), y1 = cy + r * Math.sin(b1);
    const c1x = x0 - k * r * Math.sin(b0), c1y = y0 + k * r * Math.cos(b0);
    const c2x = x1 + k * r * Math.sin(b1), c2y = y1 - k * r * Math.cos(b1);
    d += ' C ' + [c1x, c1y, c2x, c2y, x1, y1].map(f).join(' ');
    x0 = x1; y0 = y1;
  }
  return d;
}

async function pageCheckbox() {
  const d = await new Doc('Checkbox', 'Caixa de marcar. Marcada fica quase branca com o visto escuro.', 'Lista de vantagens do personal, técnicas avançadas (aquecimento, back-off) e escolhas múltiplas em formulários.').open();
  d.section('Checked / State');
  const vc = await variantSet('Checkbox', ['Checked', 'State'], grid(one(['false', 'true'], 'Checked'), one(['default', 'focus', 'disabled'], 'State')), (p) => {
    const ch = p.Checked === 'true';
    return F({ dir: 'row', ai: 'center', jc: 'center', w: 18, h: 18, fill: ch ? 'primary' : 'card', strokes: [stroke(ch ? 'primary' : 'input')].concat(p.State === 'focus' ? [ring()] : []), r: 5, op: p.State === 'disabled' ? 0.5 : 1 },
      [ch ? Ic('check', 14, 'primary-foreground', { name: 'Icon' }) : null]);
  }, { defaults: { Checked: 'false', State: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageSwitch() {
  const d = await new Doc('Switch', 'Chave liga/desliga. Ligada fica quase branca; desligada, cinza.', 'Falha muscular, Exercício por tempo, Repetições específicas, Percepção de esforço, Aquecimento, Back-off.').open();
  d.section('Checked / State');
  const vc = await variantSet('Switch', ['Checked', 'State'], grid(one(['false', 'true'], 'Checked'), one(['default', 'focus', 'disabled'], 'State')), (p) => {
    const ch = p.Checked === 'true';
    return F({ dir: 'row', ai: 'center', jc: ch ? 'end' : 'start', p: 2, w: 40, h: 24, fill: ch ? 'primary' : 'input', strokes: p.State === 'focus' ? [ring()] : [], r: 9999, op: p.State === 'disabled' ? 0.5 : 1 }, [
      E({ name: 'Thumb', w: 20, h: 20, fill: ch ? 'primary-foreground' : 'foreground', shadow: shadow(1, 2, 0.3) })]);
  }, { defaults: { Checked: 'false', State: 'default' } });
  d.put(vc);
  await d.done();
}

function toggleNode(p) {
  const on = p.State === 'on', h = p.Size === 'sm' ? 28 : 32, typo = p.Size === 'sm' ? 'body/xs-medium' : 'body/sm-medium';
  const fl = on ? 'primary' : (p.State === 'hover' ? 'accent' : (p.Variant === 'default' ? null : 'background'));
  const st = (on || p.Variant === 'default') ? [] : [stroke('input')];
  return F({ dir: 'row', ai: 'center', jc: 'center', p: [0, p.Size === 'sm' ? 10 : 12], h: h, fill: fl, strokes: st, r: 9999, op: p.State === 'disabled' ? 0.5 : 1 }, [
    T('Toggle', typo, on ? 'primary-foreground' : (p.State === 'hover' ? 'foreground' : 'muted-foreground'), { name: 'Label' })]);
}
async function pageToggle() {
  const d = await new Doc('Toggle', 'Botão que fica ligado ou desligado, em formato de pílula. Serve para filtros e escolhas rápidas.', 'Filtros de músculo (Peito, Costas, Ombros...), filtros do histórico (Todos, dias do protocolo), dias do protocolo (Dia A, B, C).').open();
  d.section('Variant × Size / State', 'Cada coluna é um State (off, on, hover, disabled).');
  const rows = [];
  for (const v of ['default', 'outline']) for (const s of ['sm', 'md']) rows.push([v + ' · ' + s, { Variant: v, Size: s }]);
  const vc = await variantSet('Toggle', ['Variant', 'Size', 'State'], grid(rows, one(['off', 'on', 'hover', 'disabled'], 'State')), toggleNode, { defaults: { Variant: 'default', Size: 'md', State: 'off' } });
  d.put(vc);
  await d.done();
}

async function pageToggleGroup() {
  const d = await new Doc('ToggleGroup', 'Grupo de opções onde só uma fica ativa. Cada opção é uma cópia do Toggle.', 'Percepção de esforço: RIR, RPE, Nenhuma (Editar zona e Editar divisão).').open();
  d.section('Variant / Value');
  const vals = ['first', 'second', 'third'];
  const vc = await variantSet('ToggleGroup', ['Variant', 'Value'], grid(one(['default', 'outline'], 'Variant'), one(vals, 'Value')), (p) => {
    const idx = vals.indexOf(p.Value);
    return F({ dir: 'row', gap: 4, p: 4, ai: 'center', h: 40, fill: p.Variant === 'default' ? 'muted' : null, r: 9999 }, [0, 1, 2].map(k =>
      C('Toggle', { Variant: p.Variant, Size: 'md', State: k === idx ? 'on' : 'off' }, { name: 'Item ' + (k + 1), texts: { Label: 'Option ' + (k + 1) } })));
  }, { defaults: { Variant: 'default', Value: 'first' } });
  d.put(vc);
  await d.done();
}

async function pageTabs() {
  const d = await new Doc('Tabs', 'Abas para trocar de conteúdo na mesma tela. Duas formas: default (fundo cinza com a aba ativa destacada) e line (sublinhado). Cada aba é uma cópia do TabsTrigger.', 'Dias do protocolo (Dia A, Dia B, Dia C), filtros do histórico, Volume semanal / Por exercício no ranking.').open();
  d.section('TabsTrigger / Variant × Active');
  const tv = await variantSet('TabsTrigger', ['Variant', 'Active'], grid(one(['default', 'line'], 'Variant'), one(['true', 'false'], 'Active')), (p) => {
    const on = p.Active === 'true';
    const label = T('Tab', 'body/sm-medium', on ? 'foreground' : 'muted-foreground', { name: 'Label' });
    if (p.Variant === 'default') return F({ dir: 'row', ai: 'center', jc: 'center', p: [0, 12], w: 100, h: 32, fill: on ? 'background' : null, r: RADIUS.sm, shadow: on ? shadow(1, 2, 0.3) : null }, [label]);
    return F({ dir: 'column', ai: 'center', jc: 'end', w: 106, h: 40 }, [
      F({ name: 'Label wrap', dir: 'row', ai: 'center', jc: 'center', w: 'fill', h: 'fill' }, [label]),
      R({ name: 'Indicator', w: 'fill', h: 2, fill: on ? 'foreground' : null })]);
  }, { defaults: { Variant: 'default', Active: 'false' } });
  d.put(tv);
  d.section('Tabs / Variant × Active');
  const vals = ['first', 'second', 'third'];
  const vc = await variantSet('Tabs', ['Variant', 'Active'], grid(one(['default', 'line'], 'Variant'), one(vals, 'Active')), (p) => {
    const idx = vals.indexOf(p.Active);
    const trig = (k) => C('TabsTrigger', { Variant: p.Variant, Active: k === idx ? 'true' : 'false' }, { name: 'TabsTrigger ' + (k + 1), w: 'fill', texts: { Label: 'Tab ' + (k + 1) } });
    if (p.Variant === 'default') return F({ dir: 'row', ai: 'center', p: 4, w: 320, h: 40, fill: 'muted', r: RADIUS.md }, [0, 1, 2].map(trig));
    return F({ dir: 'row', ai: 'end', w: 320, h: 40, strokes: [] }, [0, 1, 2].map(trig).concat([R({ name: 'Baseline', w: 320, h: 1, fill: 'border', abs: true, x: 0, y: 39, z: 0 })]));
  }, { defaults: { Variant: 'default', Active: 'first' } });
  d.put(vc);
  await d.done();
}

async function pageProgress() {
  const d = await new Doc('Progress', 'Barra de progresso fina e arredondada.', 'Etapas de formulário, XP até o próximo nível, carregamento de dados.').open();
  d.section('Variant / Value', 'Para outro valor, mude a largura da camada Indicator na cópia.');
  const vc = await variantSet('Progress', ['Variant', 'Value'], grid(one(['default', 'brand'], 'Variant'), [0, 25, 50, 75, 100].map(v => [v + '%', { Value: String(v) }])), (p) => {
    const val = +p.Value;
    return F({ dir: 'row', ai: 'center', w: 180, h: 8, fill: 'muted', r: 9999, clip: true }, [
      val ? R({ name: 'Indicator', w: 180 * val / 100, h: 8, fill: p.Variant === 'default' ? 'primary' : 'brand', r: 9999 }) : null]);
  }, { defaults: { Variant: 'default', Value: '50' } });
  d.put(vc);
  await d.done();
}

async function pageSkeleton() {
  const d = await new Doc('Skeleton', 'Formas cinza que ocupam o lugar do conteúdo enquanto ele carrega.', 'Home carregando, listas e cartões enquanto os dados chegam.').open();
  d.section('Shape');
  const S = { text: [200, 12, 6], heading: [160, 20, 6], circle: [40, 40, 9999], button: [140, 40, 9999], card: [280, 120, 16] };
  const vc = await variantSet('Skeleton', ['Shape'], grid(NONE, one(Object.keys(S), 'Shape')), (p) => {
    const [w, h, r] = S[p.Shape];
    return F({ w: w, h: h, fill: 'muted', r: r }, []);
  }, { defaults: { Shape: 'text' } });
  d.put(vc);
  await d.done();
}

async function pageSpinner() {
  const d = await new Doc('Spinner', 'Indicador de carregamento em forma de anel.', 'Tela de carregamento, botões enquanto salvam, listas carregando.').open();
  d.section('Size');
  const D = { sm: 16, md: 24, lg: 40 };
  const vc = await variantSet('Spinner', ['Size'], grid(NONE, one(['sm', 'md', 'lg'], 'Size')), (p) => {
    const dd = D[p.Size], sw = dd < 30 ? 2 : 3, r = (dd - sw) / 2;
    return F({ dir: 'row', ai: 'center', jc: 'center', w: dd, h: dd }, [
      E({ name: 'Track', w: dd - sw, h: dd - sw, strokes: [stroke('muted', sw, 'center')] }),
      P(arcD(dd / 2, dd / 2, r, -Math.PI / 2, Math.PI / 4), { name: 'Arc', strokes: [stroke('foreground', sw, 'center', { cap: 'round' })], abs: true, z: 2 })]);
  }, { defaults: { Size: 'md' } });
  d.put(vc);
  await d.done();
}

// ---------------------------------------------------------------- shadcn: composites (nested copies)
const Over = (text, color, o) => T(text, 'label/xs', color || 'muted-foreground', Object.assign({ name: 'Overline' }, o || {}));

async function pageCard() {
  const d = await new Doc('Card', 'Cartão do shadcn/ui: cabeçalho (sobretítulo, título, descrição), conteúdo e rodapé. Cantos de 16 px, fundo grafite. O rodapé usa cópias do Separator e do Button.', 'Zona de treino, Próximo treino, Plano (Gratuito / Premium), cartões de sessão, Volume, Tonelagem, Personal trainer, cartões de amigo.').open();
  d.section('Variant', 'default: com borda. highlight: borda e sobretítulo no tom de destaque (item ativo ou escolhido). muted: sem borda, fundo cinza.');
  const vc = await variantSet('Card', ['Variant'], grid(NONE, one(['default', 'highlight', 'muted'], 'Variant')), (p) => {
    const v = p.Variant;
    return F({ dir: 'column', gap: 16, p: 20, w: 343, fill: v === 'muted' ? 'muted' : 'card', strokes: v === 'muted' ? [] : [stroke(v === 'highlight' ? 'brand' : 'border')], r: RADIUS.xl }, [
      F({ name: 'CardHeader', dir: 'column', gap: 4, w: 'fill' }, [
        Over('Overline', v === 'highlight' ? 'brand' : 'muted-foreground'),
        T('Card title', 'heading/lg', 'foreground', { name: 'Title', w: 'fill' }),
        T('Short description of this card.', 'body/sm', 'muted-foreground', { name: 'Description', w: 'fill' })]),
      F({ name: 'CardContent', dir: 'column', w: 'fill' }, [T('Card content goes here, with up to two lines of text.', 'body/sm', 'foreground', { name: 'Content', w: 'fill' })]),
      C('Separator', { Orientation: 'horizontal' }, { name: 'Footer divider', w: 'fill' }),
      F({ name: 'CardFooter', dir: 'row', jc: 'end', w: 'fill' }, [Btn('Action', 'default', { size: 'sm', name: 'Action' })]),
    ]);
  }, { defaults: { Variant: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageAlert() {
  const d = await new Doc('Alert', 'Aviso dentro da tela, com ícone, título e descrição.', 'Aviso "Salvar alterações encerra o streak atual", erro de código inválido, avisos de conexão.').open();
  d.section('Variant');
  const sty = { default: ['info', 'foreground', 'border', 1], destructive: ['circle-alert', 'destructive', 'destructive', 0.5], warning: ['triangle-alert', 'warning', 'warning', 0.5], success: ['circle-check', 'success', 'success', 0.5] };
  const vc = await variantSet('Alert', ['Variant'], grid(one(Object.keys(sty), 'Variant'), NONE), (p) => {
    const [ic, col, st, op] = sty[p.Variant];
    return F({ dir: 'row', gap: 12, p: 16, w: 343, fill: 'card', strokes: [stroke(st, 1, 'inner', { op: op })], r: RADIUS.lg }, [
      Ic(ic, 18, col, { name: 'Icon' }),
      F({ name: 'Text', dir: 'column', gap: 4, w: 'fill' }, [
        T('Heads up', 'body/sm-medium', col, { name: 'Title', w: 'fill' }),
        T('Short message that explains what happened.', 'body/sm', 'muted-foreground', { name: 'Description', w: 'fill' })])]);
  }, { defaults: { Variant: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageSonner() {
  const d = await new Doc('Sonner', 'Aviso rápido (toast) que aparece por cima da tela e some sozinho. No shadcn/ui o componente se chama Sonner.', '"Perfil atualizado", "Divisão salva com sucesso", "Protocolo importado", "Amigo adicionado", "Algo deu errado. Tente de novo."').open();
  d.section('Type');
  const sty = { default: [null, null], success: ['circle-check', 'success'], error: ['circle-x', 'destructive'], action: ['info', 'foreground'] };
  const vc = await variantSet('Sonner', ['Type'], grid(one(Object.keys(sty), 'Type'), NONE), (p) => {
    const [ic, col] = sty[p.Type];
    const title = { default: 'Event has been created', success: 'Saved successfully', error: 'Something went wrong', action: 'Something went wrong' }[p.Type];
    return F({ dir: 'row', gap: 12, ai: 'center', p: [12, 12, 12, 16], w: 343, h: 56, fill: 'popover', stroke: 'border', r: RADIUS.lg, shadow: shadow(8, 24, 0.45) }, [
      ic ? Ic(ic, 18, col, { name: 'Icon' }) : null,
      F({ name: 'Text', dir: 'column', gap: 2, w: 'fill' }, [
        T(title, 'body/sm-medium', 'foreground', { name: 'Title', w: 'fill' }),
        p.Type === 'default' ? T('Sunday, 9 am', 'body/xs', 'muted-foreground', { name: 'Description', w: 'fill' }) : null]),
      p.Type === 'action' ? Btn('Retry', 'default', { size: 'sm', name: 'Action' }) : null]);
  }, { defaults: { Type: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageAlertDialog() {
  const d = await new Doc('AlertDialog', 'Janela de confirmação que interrompe a tela. Ícone no topo, título, texto e botões empilhados (formato celular). Usa cópias do IconCircle e do Button.', 'Abandonar treino, Finalizar treino, Salvar mesmo assim, Criar novo protocolo, Sair da conta, Remover amigo, Copiar protocolo, Compra concluída, Oferta de streak.').open();
  d.section('Variant');
  const sty = { default: ['muted', 'default', 'Continue'], destructive: ['destructive', 'destructive', 'Delete'], success: ['success', 'default', 'Got it'] };
  const vc = await variantSet('AlertDialog', ['Variant'], grid(NONE, one(Object.keys(sty), 'Variant')), (p) => {
    const [tone, bv, bl] = sty[p.Variant];
    return F({ dir: 'column', gap: 24, ai: 'center', p: 24, w: 327, fill: 'popover', stroke: 'border', r: RADIUS['2xl'], shadow: shadow(12, 32, 0.55) }, [
      C('IconCircle', { Tone: tone, Size: 'md' }, { name: 'IconCircle' }),
      F({ name: 'AlertDialogHeader', dir: 'column', gap: 8, w: 'fill' }, [
        T('Are you sure?', 'heading/lg', 'foreground', { name: 'Title', w: 'fill', align: 'center' }),
        T('This action changes your data. You can come back later.', 'body/sm', 'muted-foreground', { name: 'Description', w: 'fill', align: 'center' })]),
      F({ name: 'AlertDialogFooter', dir: 'column', gap: 8, w: 'fill' }, [
        Btn(bl, bv, { name: 'Action', w: 'fill' }),
        p.Variant !== 'success' ? Btn('Cancel', 'ghost', { name: 'Cancel', w: 'fill' }) : null])]);
  }, { defaults: { Variant: 'default' } });
  d.put(vc);
  d.note('Na tela, coloque um retângulo com a cor overlay (preto 60%) atrás da janela.');
  await d.done();
}

async function pageDialog() {
  const d = await new Doc('Dialog', 'Janela com formulário curto. A variante confirm-text pede para digitar uma palavra antes de uma ação sem volta. Usa cópias do Input, do Button, do IconCircle e do ícone de fechar.', 'Importar protocolo (código), Excluir conta (digitar EXCLUIR), Gerar código de convite.').open();
  d.section('Variant');
  const vc = await variantSet('Dialog', ['Variant'], grid(NONE, one(['form', 'confirm-text'], 'Variant')), (p) => {
    const close = Ic('x', 16, 'muted-foreground', { name: 'Close', abs: true, x: 327 - 36, y: 18, z: 5 });
    if (p.Variant === 'form') return F({ dir: 'column', gap: 16, p: 24, w: 327, fill: 'popover', stroke: 'border', r: RADIUS['2xl'], shadow: shadow(12, 32, 0.55) }, [
      F({ name: 'DialogHeader', dir: 'column', gap: 8, w: 'fill', p: [0, 24, 0, 0] }, [
        T('Enter code', 'heading/lg', 'foreground', { name: 'Title', w: 'fill' }),
        T('Paste the code you received.', 'body/sm', 'muted-foreground', { name: 'Description', w: 'fill' })]),
      C('Input', { State: 'default', Size: 'md' }, { name: 'Input', w: 'fill', texts: { Value: 'e.g. AB12CD' } }),
      F({ name: 'DialogFooter', dir: 'row', gap: 8, w: 'fill', p: [8, 0, 0, 0] }, [Btn('Cancel', 'outline', { name: 'Cancel', w: 'fill' }), Btn('Confirm', 'default', { name: 'Confirm', w: 'fill' })]),
      close]);
    return F({ dir: 'column', gap: 16, ai: 'center', p: 24, w: 327, fill: 'popover', stroke: 'border', r: RADIUS['2xl'], shadow: shadow(12, 32, 0.55) }, [
      C('IconCircle', { Tone: 'destructive', Size: 'md' }, { name: 'IconCircle' }),
      F({ name: 'DialogHeader', dir: 'column', gap: 8, w: 'fill' }, [
        T('Delete account?', 'heading/lg', 'foreground', { name: 'Title', w: 'fill', align: 'center' }),
        T('This cannot be undone. All your data will be removed.', 'body/sm', 'muted-foreground', { name: 'Description', w: 'fill', align: 'center' })]),
      F({ name: 'Confirm field', dir: 'column', gap: 8, w: 'fill' }, [
        T('Type DELETE to confirm', 'body/xs', 'muted-foreground', { name: 'Hint', w: 'fill', align: 'center' }),
        C('Input', { State: 'filled', Size: 'md' }, { name: 'Input', w: 'fill', texts: { Value: 'DELETE' } })]),
      F({ name: 'DialogFooter', dir: 'column', gap: 8, w: 'fill', p: [8, 0, 0, 0] }, [Btn('Delete account', 'destructive', { name: 'Action', w: 'fill' }), Btn('Cancel', 'ghost', { name: 'Cancel', w: 'fill' })]),
      close]);
  }, { defaults: { Variant: 'form' } });
  d.put(vc);
  await d.done();
}

async function pageDrawer() {
  const d = await new Doc('Drawer', 'Painel que sobe da parte de baixo da tela, com alça no topo. Largura da tela do celular (393 px). Usa cópias do Label, Input, Button e Badge.', 'Check-in de humor, Adicionar amigo, Comprar vidas, Descanso entre séries, Ver todos os exercícios.').open();
  d.section('Variant', 'default: título, campo e botões. options: lista de opções em botões, como a compra de vidas.');
  const vc = await variantSet('Drawer', ['Variant'], grid(NONE, one(['default', 'options'], 'Variant')), (p) => {
    const head = [
      R({ name: 'Handle', w: 40, h: 4, fill: 'muted', r: 9999, alignSelf: 'center' }),
      F({ name: 'DrawerHeader', dir: 'column', gap: 8, w: 'fill', p: [12, 0, 0, 0] }, [
        T('Drawer title', 'heading/lg', 'foreground', { name: 'Title', w: 'fill', align: 'center' }),
        T('A short line that explains this panel.', 'body/sm', 'muted-foreground', { name: 'Description', w: 'fill', align: 'center' })])];
    const body = p.Variant === 'default' ? [
      F({ name: 'Field', dir: 'column', gap: 8, w: 'fill' }, [C('Label', { State: 'default' }, { name: 'Label' }), C('Input', { State: 'default', Size: 'md' }, { name: 'Input', w: 'fill' })]),
      F({ name: 'DrawerFooter', dir: 'column', gap: 8, w: 'fill', p: [8, 0, 0, 0] }, [Btn('Confirm', 'default', { name: 'Confirm', w: 'fill' }), Btn('Close', 'ghost', { name: 'Close', w: 'fill' })])] : [
      F({ name: 'Options', dir: 'column', gap: 8, w: 'fill' }, [
        Btn('Option 1', 'default', { size: 'lg', name: 'Option 1', w: 'fill' }),
        F({ name: 'Option 2 row', dir: 'row', gap: 8, ai: 'center', w: 'fill' }, [Btn('Option 2', 'outline', { size: 'lg', name: 'Option 2', w: 'fill' }), C('Badge', { Variant: 'brand' }, { name: 'Badge', texts: { Label: 'Best value' } })]),
        Btn('Option 3', 'outline', { size: 'lg', name: 'Option 3', w: 'fill' })]),
      F({ name: 'DrawerFooter', dir: 'column', w: 'fill' }, [Btn('Not now', 'ghost', { name: 'Not now', w: 'fill' })])];
    return F({ dir: 'column', gap: 16, p: [10, 24, 32, 24], w: 393, fill: 'popover', stroke: 'border', r: [24, 24, 0, 0], shadow: shadow(-8, 32, 0.5) }, head.concat(body));
  }, { defaults: { Variant: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageItem() {
  const d = await new Doc('Item', 'Linha de lista com ícone, título, descrição e ação no fim (seta, mais ou nada). No shadcn/ui o componente se chama Item. Os ícones são cópias do Icon, troque pela camada Icon.', 'Comprar vidas, Sair, Deletar conta (destructive), dias do protocolo, lista de exercícios (com +), sessões anteriores, filtros de Progresso.').open();
  d.section('Variant × Size / Trailing', 'Cada coluna é um Trailing (chevron, plus, none).');
  const rows = [];
  for (const v of ['default', 'destructive']) for (const s of ['sm', 'md']) rows.push([v + ' · ' + s, { Variant: v, Size: s }]);
  const vc = await variantSet('Item', ['Variant', 'Size', 'Trailing'], grid(rows, one(['chevron', 'plus', 'none'], 'Trailing')), (p) => {
    const col = p.Variant === 'destructive' ? 'destructive' : 'foreground', md = p.Size === 'md';
    const media = md ? F({ name: 'ItemMedia', dir: 'row', ai: 'center', jc: 'center', w: 40, h: 40, fill: 'muted', r: RADIUS.md }, [Ic(p.Variant === 'destructive' ? 'trash-2' : 'dumbbell', 20, col, { name: 'Icon' })])
      : Ic(p.Variant === 'destructive' ? 'log-out' : 'heart', 20, col, { name: 'Icon' });
    const trailing = p.Trailing === 'chevron' ? Ic('chevron-right', 16, 'muted-foreground', { name: 'Trailing' }) : (p.Trailing === 'plus' ? Ic('plus', 20, 'brand', { name: 'Trailing' }) : null);
    return F({ dir: 'row', gap: 12, ai: 'center', p: [0, 16, 0, md ? 12 : 16], w: 343, h: md ? 64 : 48, fill: 'card', stroke: 'border', r: RADIUS.lg }, [
      media,
      F({ name: 'ItemContent', dir: 'column', gap: 2, w: 'fill' }, [
        T('Item title', 'body/sm-medium', col, { name: 'Title', w: 'fill' }),
        md ? T('Supporting text', 'body/xs', 'muted-foreground', { name: 'Description', w: 'fill' }) : null]),
      trailing]);
  }, { defaults: { Variant: 'default', Size: 'md', Trailing: 'chevron' } });
  d.put(vc);
  await d.done();
}

async function pageTable() {
  const d = await new Doc('Table', 'Tabela simples para séries e totais. TableRow tem três tipos: header, default e footer. A tabela de exemplo é montada com cópias do TableRow.', 'Detalhe da sessão (série, kg, reps, RPE), volume por exercício e total, histórico do exercício.').open();
  d.section('TableRow / Variant');
  const COLS = [['Set', 90], ['Weight', 90], ['Reps', 80], ['RPE', 'fill']];
  const cell = (lb, w, val, typo, color) => F({ name: 'Cell ' + lb, dir: 'row', ai: 'center', w: w, h: 'fill' }, [T(val, typo, color, { name: lb })]);
  const rv = await variantSet('TableRow', ['Variant'], grid(NONE, one(['header', 'default', 'footer'], 'Variant')), (p) => {
    const v = p.Variant, h = v === 'header' ? 32 : 44;
    const kids = v === 'footer'
      ? [T('Total', 'body/sm-medium', 'foreground', { name: 'Total label', w: 'fill' }), T('1,240 kg', 'body/sm-medium', 'brand', { name: 'Total value' })]
      : COLS.map(([lb, w], k) => v === 'header' ? cell(lb, w, lb, 'label/2xs', 'muted-foreground') : cell(lb, w, ['1', '60 kg', '8', '7'][k], 'body/sm', 'foreground'));
    return F({ dir: 'column', w: 343, h: h, fill: v === 'footer' ? 'muted' : null }, [
      v === 'footer' ? R({ name: 'Top border', w: 'fill', h: 1, fill: 'border' }) : null,
      F({ name: 'Cells', dir: 'row', ai: 'center', p: [0, 16], w: 'fill', h: 'fill' }, kids),
      v !== 'footer' ? R({ name: 'Bottom border', w: 'fill', h: 1, fill: 'border' }) : null]);
  }, { defaults: { Variant: 'default' } });
  d.put(rv);
  d.section('Table', 'Exemplo completo com cabeçalho, três séries e total.');
  const rows = [['1', '60 kg', '8', '7'], ['2', '60 kg', '8', '8'], ['3', '55 kg', '10', '8']];
  const m = await single('Table', F({ dir: 'column', w: 343, fill: 'card', stroke: 'border', r: RADIUS.xl, clip: true }, [
    F({ name: 'TableCaption', dir: 'row', ai: 'center', p: [0, 16], w: 'fill', h: 40 }, [T('Exercise name', 'body/sm-medium', 'foreground', { name: 'Caption' })]),
    C('TableRow', { Variant: 'header' }, { name: 'TableHeader', w: 'fill' }),
  ].concat(rows.map((r, k) => C('TableRow', { Variant: 'default' }, { name: 'TableRow ' + (k + 1), w: 'fill', texts: { Set: r[0], Weight: r[1], Reps: r[2], RPE: r[3] } }))).concat([
    C('TableRow', { Variant: 'footer' }, { name: 'TableFooter', w: 'fill', texts: { 'Total value': '1,510 kg' } })])));
  d.put(m);
  await d.done();
}

async function pageChart() {
  const d = await new Doc('Chart', 'Cartão de gráfico. Linhas e barras usam as cores chart. A variante empty mostra o estado sem dados.', 'Carga máxima do exercício, Tonelagem dos últimos 30 dias, Progresso, Volume semanal.').open();
  d.section('Type');
  const vc = await variantSet('Chart', ['Type'], grid(NONE, one(['line', 'bar', 'empty'], 'Type')), (p) => {
    const t = p.Type, aw = 303, ah = 112;
    const gridLines = F({ name: 'Grid', dir: 'column', jc: 'space-between', w: aw, h: ah, abs: true, x: 0, y: 0, z: 0 }, [0, 1, 2].map(k => R({ name: 'Grid ' + (k + 1), w: 'fill', h: 1, fill: 'border' })));
    let plotKids = [gridLines];
    if (t === 'line') {
      const vals = [0.25, 0.4, 0.35, 0.6, 0.7, 0.85];
      const pts = vals.map((v, k) => [k * aw / 5, ah - v * ah]);
      plotKids.push(P('M ' + pts.map(q => q[0].toFixed(2) + ' ' + q[1].toFixed(2)).join(' L '), { name: 'Line', strokes: [stroke('chart-1', 2, 'center', { cap: 'round' })], abs: true, z: 2 }));
      pts.forEach((q, k) => plotKids.push(E({ name: 'Point ' + (k + 1), w: 8, h: 8, fill: 'chart-1', strokes: [stroke('card', 2, 'outer')], abs: true, x: q[0] - 4, y: q[1] - 4, z: 3 })));
    }
    const plot = t === 'bar'
      ? F({ name: 'Plot', dir: 'row', ai: 'end', jc: 'space-between', w: aw, h: ah }, [gridLines].concat([0.3, 0.55, 0.4, 0.75, 0.6, 0.9].map((v, k) => R({ name: 'Bar ' + (k + 1), w: 20, h: Math.round(v * ah), fill: k === 5 ? 'chart-1' : 'chart-5', r: 6 }))))
      : (t === 'line' ? F({ name: 'Plot', dir: 'row', w: aw, h: ah }, plotKids)
        : F({ name: 'Plot', dir: 'column', ai: 'center', jc: 'center', gap: 8, w: aw, h: ah }, [gridLines, Ic('trending-up', 24, 'muted-foreground', { name: 'Icon' }), T('No data in the last 30 days', 'body/sm', 'muted-foreground', { name: 'Empty text' })]));
    return F({ dir: 'column', gap: 4, p: 20, w: 343, h: 232, fill: 'card', stroke: 'border', r: RADIUS.xl }, [
      Over('Max weight · kg'),
      T(t === 'empty' ? '—' : '62.5 kg', 'heading/xl', t === 'empty' ? 'muted-foreground' : 'foreground', { name: 'Value' }),
      F({ name: 'Plot area', dir: 'column', gap: 10, w: 'fill', p: [12, 0, 0, 0] }, [
        plot,
        F({ name: 'Axis', dir: 'row', jc: 'space-between', w: aw }, ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'].map(lb => T(lb, 'label/2xs', 'muted-foreground', { name: 'Axis ' + lb })))])]);
  }, { defaults: { Type: 'line' } });
  d.put(vc);
  await d.done();
}

async function pageEmpty() {
  const d = await new Doc('Empty', 'Estado vazio: ícone, título, texto curto e uma ação. No shadcn/ui o componente se chama Empty. Usa cópias do IconCircle e do Button.', 'Nenhum treino ainda, Sem dados de progresso, Treine junto com amigos, Nenhum treino neste filtro, Sem conexão, Algo deu errado.').open();
  d.section('Variant', 'default: solto na tela. outline: com borda tracejada, para dentro de cartões.');
  const vc = await variantSet('Empty', ['Variant'], grid(NONE, one(['default', 'outline'], 'Variant')), (p) =>
    F({ dir: 'column', gap: 16, ai: 'center', p: [28, 32], w: 343, strokes: p.Variant === 'outline' ? [stroke('border', 1, 'inner', { dashed: true })] : [], r: RADIUS.xl }, [
      C('IconCircle', { Tone: 'muted', Size: 'lg' }, { name: 'IconCircle', icon: 'clock' }),
      F({ name: 'EmptyHeader', dir: 'column', gap: 8, w: 'fill' }, [
        T('No workouts yet', 'heading/lg', 'foreground', { name: 'Title', w: 'fill', align: 'center' }),
        T('Your finished workouts will show up here.', 'body/sm', 'muted-foreground', { name: 'Description', w: 'fill', align: 'center' })]),
      Btn('Get started', 'default', { icon: 'plus', name: 'Action' })]), { defaults: { Variant: 'default' } });
  d.put(vc);
  await d.done();
}

// ---------------------------------------------------------------- app components (nested copies)
async function pageAppHeader() {
  const d = await new Doc('AppHeader', 'Cabeçalho das telas. back: telas internas com voltar. large: telas principais com sobretítulo, título grande e ação. profile: Home, com XP e avatar.', 'Todas as telas: Home, Treinar, Histórico, Amigos, Perfil (large/profile) e telas internas como Editar zona, Detalhe da sessão, Ranking (back).', APP_OVER).open();
  d.section('Variant');
  const vc = await variantSet('AppHeader', ['Variant'], grid(one(['back', 'large', 'profile'], 'Variant'), NONE), (p) => {
    if (p.Variant === 'back') return F({ dir: 'row', gap: 12, ai: 'center', p: [0, 16], w: 393, h: 56, fill: 'background' }, [
      Ic('chevron-left', 24, 'foreground', { name: 'Back' }), T('Screen title', 'heading/lg', 'foreground', { name: 'Title', w: 'fill' }), Ic('ellipsis', 24, 'muted-foreground', { name: 'More' })]);
    const left = F({ name: 'Heading', dir: 'column', gap: 4, w: 'fill' }, [Over('Section'), T('Title', 'heading/3xl', 'foreground', { name: 'Title' })]);
    const right = p.Variant === 'large' ? Btn('Action', 'outline', { size: 'md', icon: 'plus', name: 'Action' })
      : F({ name: 'Actions', dir: 'row', gap: 12, ai: 'center' }, [
        F({ name: 'XP badge', dir: 'row', gap: 6, ai: 'center', p: [0, 10], h: 28, stroke: 'border', r: 9999 }, [Ic('flame', 16, 'brand', { name: 'Icon' }), T('0 XP', 'body/xs-medium', 'foreground', { name: 'XP' })]),
        C('Avatar', { Size: 'md', Type: 'initials' }, { name: 'Avatar' })]);
    return F({ dir: 'row', gap: 12, ai: 'end', p: [20, 24, 12, 24], w: 393, h: 88, fill: 'background' }, [left, right]);
  }, { defaults: { Variant: 'back' } });
  d.put(vc);
  await d.done();
}

async function pageBottomNav() {
  const d = await new Doc('BottomNav', 'Barra de navegação fixa com as cinco abas do app. A aba ativa fica clara e ganha um fundo discreto atrás do ícone. Cada aba é uma cópia do BottomNavItem.', 'Rodapé de todas as telas principais: Home, Treinar, Histórico, Amigos, Perfil.', APP_OVER).open();
  d.section('BottomNavItem / Active', 'Troque o ícone pela camada Icon e o texto pela camada Label.');
  const iv = await variantSet('BottomNavItem', ['Active'], grid(NONE, one(['true', 'false'], 'Active')), (p) => {
    const on = p.Active === 'true';
    return F({ dir: 'column', gap: 4, ai: 'center', p: [10, 0, 8, 0], w: 78, h: 71 }, [
      F({ name: 'Pill', dir: 'row', ai: 'center', jc: 'center', w: 52, h: 30, fill: on ? 'accent' : null, r: 9999 }, [
        Object.assign(Ic('home', 22, on ? 'foreground' : 'muted-foreground', { name: 'Icon' }), {})]),
      T('Home', on ? 'body/xs-medium' : 'body/xs', on ? 'foreground' : 'muted-foreground', { name: 'Label' })]);
  }, { defaults: { Active: 'false' } });
  d.put(iv);
  d.section('BottomNav / Active');
  const tabs = [['home', 'home', 'Home'], ['workout', 'dumbbell', 'Workout'], ['history', 'clock', 'History'], ['friends', 'users', 'Friends'], ['profile', 'user', 'Profile']];
  const vc = await variantSet('BottomNav', ['Active'], grid(one(tabs.map(t => t[0]), 'Active'), NONE), (p) =>
    F({ dir: 'column', w: 393, h: 72, fill: 'background' }, [
      R({ name: 'Top border', w: 'fill', h: 1, fill: 'border' }),
      F({ name: 'Tabs', dir: 'row', w: 'fill', h: 'fill' }, tabs.map(([key, ic, lb]) => {
        const on = key === p.Active;
        return C('BottomNavItem', { Active: on ? 'true' : 'false' }, { name: 'Tab ' + lb, w: 'fill', texts: { Label: lb }, icon: ic, iconColor: on ? 'foreground' : 'muted-foreground', iconBg: on ? 'accent' : 'background' });
      }))]), { defaults: { Active: 'home' } });
  d.put(vc);
  await d.done();
}

async function pageStatCard() {
  const d = await new Doc('StatCard', 'Cartão de número: sobretítulo, valor grande e legenda. highlight usa o tom de destaque para o número principal da tela.', 'Streak e Protocolo na Home, Esta semana (volume), Zona de treino (reps e RPE), Resumo do treino (volume, duração, XP, streak), Peso e Altura no Perfil.', APP_OVER).open();
  d.section('Variant × Size', 'md: meia largura (dois por linha). wide: largura toda, valor e legenda lado a lado.');
  const vc = await variantSet('StatCard', ['Variant', 'Size'], grid(one(['md', 'wide'], 'Size'), one(['default', 'highlight'], 'Variant')), (p) => {
    const hl = p.Variant === 'highlight', md = p.Size === 'md';
    const head = F({ name: 'Header', dir: 'row', gap: 6, ai: 'center', w: 'fill' }, [Ic(md ? 'flame' : 'trending-up', 14, hl ? 'brand' : 'muted-foreground', { name: 'Icon' }), Over(md ? 'Streak' : 'This week', hl ? 'brand' : 'muted-foreground')]);
    if (md) return F({ dir: 'column', gap: 4, p: 16, w: 165, h: 136, fill: 'card', strokes: [stroke(hl ? 'brand' : 'border')], r: RADIUS.xl }, [
      head, T('12', 'display/4xl', hl ? 'brand' : 'foreground', { name: 'Value' }),
      T('days in a row', 'body/xs', 'muted-foreground', { name: 'Caption', w: 'fill' }), T('+2 this week', 'body/xs', 'muted-foreground', { name: 'Meta', w: 'fill' })]);
    return F({ dir: 'column', gap: 8, p: 16, w: 343, h: 88, fill: 'card', strokes: [stroke(hl ? 'brand' : 'border')], r: RADIUS.xl }, [
      head, F({ name: 'Row', dir: 'row', ai: 'end', w: 'fill' }, [T('3,420 kg', 'heading/2xl', hl ? 'brand' : 'foreground', { name: 'Value', w: 'fill' }), T('vs last week', 'body/xs', 'muted-foreground', { name: 'Caption' })])]);
  }, { defaults: { Variant: 'default', Size: 'md' } });
  d.put(vc);
  await d.done();
}

async function pageWorkoutCard() {
  const d = await new Doc('WorkoutCard', 'Cartão do próximo treino com lista de exercícios e botão para começar. A variante empty convida a montar o primeiro protocolo. Usa cópias do Button e do IconCircle.', 'Próximo treino na Home, Home primeiro acesso (Monte seu primeiro protocolo), dias do protocolo em Treinar.', APP_OVER).open();
  d.section('Variant');
  const vc = await variantSet('WorkoutCard', ['Variant'], grid(NONE, one(['default', 'empty'], 'Variant')), (p) => {
    if (p.Variant === 'default') return F({ dir: 'column', gap: 16, p: 20, w: 343, fill: 'card', stroke: 'border', r: RADIUS.xl }, [
      F({ name: 'Header', dir: 'column', gap: 4, w: 'fill' }, [Over('Next workout · 6 exercises'), T('Workout name', 'heading/xl', 'foreground', { name: 'Title', w: 'fill' })]),
      F({ name: 'Exercises', dir: 'column', gap: 6, w: 'fill' }, ['Exercise one', 'Exercise two', 'Exercise three', 'Exercise four'].map((ex, k) =>
        F({ name: 'Exercise ' + (k + 1), dir: 'row', gap: 10, ai: 'center', w: 'fill', h: 26 }, [
          E({ name: 'Dot', w: 6, h: 6, fill: 'brand' }), T(ex, 'body/sm', 'foreground', { name: 'Name', w: 'fill' }), T('3x', 'body/sm', 'muted-foreground', { name: 'Sets' })]))
        .concat([T('+2 more', 'body/xs', 'muted-foreground', { name: 'More' })])),
      Btn('Start workout', 'default', { iconPos: 'right', name: 'Action', w: 'fill' })]);
    return F({ dir: 'column', gap: 16, p: 20, w: 343, fill: 'card', stroke: 'brand', r: RADIUS.xl }, [
      C('IconCircle', { Tone: 'muted', Size: 'sm' }, { name: 'IconCircle', icon: 'dumbbell' }),
      F({ name: 'Header', dir: 'column', gap: 8, w: 'fill' }, [
        T('Build your first plan', 'heading/xl', 'foreground', { name: 'Title', w: 'fill' }),
        T('Create your split from scratch or import one with a code from your coach.', 'body/sm', 'muted-foreground', { name: 'Description', w: 'fill' })]),
      F({ name: 'Actions', dir: 'column', gap: 8, w: 'fill' }, [Btn('Create plan', 'default', { icon: 'plus', name: 'Create', w: 'fill' }), Btn('Import with code', 'ghost', { icon: 'import', name: 'Import', w: 'fill' })])]);
  }, { defaults: { Variant: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageSetRow() {
  const d = await new Doc('SetRow', 'Linha de série durante o treino: número da série, campos de kg, reps e RPE, marcador de falha (F) e ação. done: série concluída, com visto.', 'Treino em andamento, Série preenchida, Editar divisão (séries por exercício).', APP_OVER).open();
  d.section('State');
  const vc = await variantSet('SetRow', ['State'], grid(NONE, one(['empty', 'filled', 'done'], 'State')), (p) => {
    const st = p.State, done = st === 'done';
    return F({ dir: 'row', gap: 8, ai: 'center', w: 343, h: 48 }, [
      F({ name: 'Set', dir: 'row', jc: 'center', w: 24 }, [T('1', 'body/sm-medium', done ? 'brand' : 'muted-foreground', { name: 'Number' })]),
    ].concat([['Kg', '60'], ['Reps', '8'], ['RPE', '7']].map(([lb, val]) =>
      F({ name: 'Cell ' + lb, dir: 'row', ai: 'center', jc: 'center', w: 68, h: 40, fill: done ? ['success', 0.12] : 'background', strokes: [stroke(done ? 'success' : 'input', 1, 'inner', { op: done ? 0.5 : null })], r: RADIUS.md }, [
        T(st === 'empty' ? '0' : val, 'body/base-medium', st === 'empty' ? 'muted-foreground' : 'foreground', { name: 'Value' })]))).concat([
      F({ name: 'Failure toggle', dir: 'row', ai: 'center', jc: 'center', w: 28, h: 24, stroke: 'border', r: RADIUS.sm }, [T('F', 'body/xs-medium', 'muted-foreground', { name: 'F' })]),
      Spacer(),
      Ic(done ? 'check' : 'x', 18, done ? 'success' : 'muted-foreground', { name: 'Icon' })]));
  }, { defaults: { State: 'empty' } });
  d.put(vc);
  d.note('Cabeçalho das colunas (KG, REPS, RPE): use TableRow / header ou o estilo label/2xs.');
  await d.done();
}

async function pageNumberStepper() {
  const d = await new Doc('NumberStepper', 'Contador com botões de menos e mais.', 'Séries global (3x), dias na divisão, número de séries por exercício.', APP_OVER).open();
  d.section('Size / State');
  const vc = await variantSet('NumberStepper', ['Size', 'State'], grid(one(['sm', 'md'], 'Size'), one(['default', 'disabled'], 'State')), (p) => {
    const b = p.Size === 'sm' ? 28 : 36;
    const box = (nm, ic) => F({ name: nm, dir: 'row', ai: 'center', jc: 'center', w: b, h: b, fill: 'background', stroke: 'input', r: RADIUS.sm }, [Ic(ic, 16, 'foreground', { name: 'Icon' })]);
    return F({ dir: 'row', ai: 'center', h: b, op: p.State === 'disabled' ? 0.5 : 1 }, [
      box('Decrease', 'minus'),
      F({ name: 'Value wrap', dir: 'row', ai: 'center', jc: 'center', w: 44, h: b }, [T('3', p.Size === 'sm' ? 'body/sm-medium' : 'body/base-medium', 'foreground', { name: 'Value' })]),
      box('Increase', 'plus')]);
  }, { defaults: { Size: 'md', State: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageRestTimer() {
  const d = await new Doc('RestTimer', 'Cronômetro de descanso entre séries: anel de progresso, tempo grande, próxima série e ajustes de 15 segundos. Os ajustes são cópias do Button.', 'Descanso entre séries (painel que sobe durante o treino).', APP_OVER).open();
  d.section('RestTimer');
  const r = 84, sz = 2 * r + 8;
  const m = await single('RestTimer', F({ dir: 'column', gap: 16, ai: 'center', w: 280 }, [
    T('Rest', 'label/xs', 'muted-foreground', { name: 'Overline' }),
    F({ name: 'Ring', dir: 'column', ai: 'center', jc: 'center', gap: 2, w: sz, h: sz }, [
      E({ name: 'Track', w: 2 * r, h: 2 * r, strokes: [stroke('muted', 8, 'center')], abs: true, x: 4, y: 4, z: 0 }),
      P(arcD(sz / 2, sz / 2, r, -Math.PI / 2, Math.PI * 0.75), { name: 'Progress', strokes: [stroke('brand', 8, 'center', { cap: 'round' })], abs: true, z: 1 }),
      T('01:30', 'display/4xl', 'foreground', { name: 'Time' }),
      T('of 02:00', 'body/xs', 'muted-foreground', { name: 'Total' })]),
    T('Next: Set 2 · Exercise name', 'body/sm', 'muted-foreground', { name: 'Next' }),
    F({ name: 'Adjust', dir: 'row', gap: 12 }, [Btn('-15s', 'outline', { size: 'sm', name: 'Minus 15' }), Btn('+15s', 'outline', { size: 'sm', name: 'Plus 15' })])]));
  d.put(m);
  await d.done();
}

async function pageAchievement() {
  const d = await new Doc('AchievementTile', 'Selo de conquista. locked aparece apagado, com cadeado.', 'Selos do Perfil (3 de 11), Detalhe do selo.', APP_OVER).open();
  d.section('State');
  const vc = await variantSet('AchievementTile', ['State'], grid(NONE, one(['unlocked', 'locked'], 'State')), (p) => {
    const un = p.State === 'unlocked';
    return F({ dir: 'column', gap: 12, ai: 'center', jc: 'center', p: [0, 6], w: 104, h: 96, fill: 'card', stroke: 'border', r: RADIUS.lg, op: un ? 1 : 0.5 }, [
      Ic(un ? 'flame' : 'award', 28, un ? 'brand' : 'muted-foreground', { name: 'Icon' }),
      T('Badge name', un ? 'body/xs-medium' : 'body/xs', un ? 'foreground' : 'muted-foreground', { name: 'Name', w: 'fill', align: 'center' }),
      un ? null : Ic('lock', 14, 'muted-foreground', { name: 'Lock', abs: true, x: 104 - 22, y: 8, z: 2 })]);
  }, { defaults: { State: 'unlocked' } });
  d.put(vc);
  await d.done();
}

async function pageLeaderboard() {
  const d = await new Doc('LeaderboardRow', 'Linha do ranking: posição, avatar, nome, detalhe e valor. you destaca a sua linha; no-data mostra quem ainda não registrou. Usa cópias do Avatar e do Badge.', 'Ranking de volume semanal e Ranking por exercício (Amigos).', APP_OVER).open();
  d.section('Variant');
  const vc = await variantSet('LeaderboardRow', ['Variant'], grid(NONE, one(['default', 'you', 'no-data'], 'Variant')), (p) => {
    const v = p.Variant, nd = v === 'no-data', you = v === 'you';
    return F({ dir: 'row', gap: 12, ai: 'center', p: [0, 16, 0, 12], w: 343, h: 64, fill: 'card', strokes: [stroke(you ? 'brand' : 'border')], r: RADIUS.lg }, [
      F({ name: 'Position', dir: 'row', jc: 'center', w: 24 }, [T(nd ? '—' : (you ? '1' : '2'), 'body/sm-medium', you ? 'brand' : 'muted-foreground', { name: 'Number' })]),
      C('Avatar', { Size: 'sm', Type: 'initials' }, { name: 'Avatar' }),
      F({ name: 'Person', dir: 'column', gap: 2, w: 'fill' }, [
        F({ name: 'Name row', dir: 'row', gap: 8, ai: 'center' }, [T('Name', 'body/sm-medium', 'foreground', { name: 'Name' }), you ? C('Badge', { Variant: 'brand' }, { name: 'Badge', texts: { Label: 'You' } }) : null]),
        T(nd ? 'No records' : '60 kg × 8 reps', 'body/xs', 'muted-foreground', { name: 'Detail' })]),
      F({ name: 'Score', dir: 'column', gap: 2, ai: 'end' }, [
        T(nd ? '—' : '76 kg', 'heading/lg', nd ? 'muted-foreground' : (you ? 'brand' : 'foreground'), { name: 'Value' }),
        T('1RM est.', 'body/xs', 'muted-foreground', { name: 'Unit' })])]);
  }, { defaults: { Variant: 'default' } });
  d.put(vc);
  await d.done();
}

async function pageSteps() {
  const d = await new Doc('Steps', 'Indicador de etapa em pontos. A etapa atual vira uma pílula clara.', 'Onboarding (1 de 4 a 4 de 4), Editar divisão (etapa 1 e 2), Novo protocolo.', APP_OVER).open();
  d.section('Count / Current');
  const vc = await variantSet('Steps', ['Count', 'Current'], grid(one(['2', '4'], 'Count'), one(['1', '2', '3', '4'], 'Current'), (p) => +p.Current <= +p.Count), (p) => {
    const n = +p.Count, cur = +p.Current, kids = [];
    for (let k = 1; k <= n; k++) kids.push(k === cur ? R({ name: 'Step ' + k, w: 20, h: 8, fill: 'foreground', r: 9999 }) : E({ name: 'Step ' + k, w: 8, h: 8, fill: 'muted' }));
    return F({ dir: 'row', gap: 6, ai: 'center', h: 8 }, kids);
  }, { defaults: { Count: '4', Current: '1' } });
  d.put(vc);
  await d.done();
}

// ---------------------------------------------------------------- tokens sync (keeps ids of existing colors / typographies)
async function syncTokens() {
  const L = lib();
  const existing = {};
  for (const c of (L.colors || [])) existing[c.name] = c;
  for (const c of DATA.colors) {
    let lc = existing[c.name];
    if (!lc) { lc = L.createColor(); lc.name = c.name; }
    tryDo('color ' + c.name, () => { lc.path = c.path || ''; lc.color = c.hex; lc.opacity = c.opacity; });
    COL[c.name] = lc;
    delete existing[c.name];
  }
  for (const k in existing) tryDo('remove extra color ' + k, () => existing[k].remove());
  await sleep(50);
  let font = null, variants = [];
  try { font = penpot.fonts.findByName('Inter'); variants = (font && font.variants) || []; } catch (e) {}
  const exT = {};
  for (const t of (L.typographies || [])) exT[(t.path ? t.path + '/' : '') + t.name] = t;
  for (const t of DATA.typos) {
    let lt = exT[t.key];
    if (!lt) { lt = L.createTypography(); lt.name = t.name; }
    tryDo('typo ' + t.key, () => {
      lt.path = t.path;
      if (font) {
        let best = null, bd = 1e9;
        for (const v of variants) { const dd = Math.abs(parseInt(v.fontWeight || '400', 10) - t.weight) + ((v.fontStyle || 'normal') === 'normal' ? 0 : 1000); if (dd < bd) { bd = dd; best = v; } }
        lt.setFont(font, best || undefined);
      } else { lt.fontFamily = 'Inter'; lt.fontId = 'gfont-inter'; lt.fontVariantId = t.weight === 400 ? 'regular' : String(t.weight); lt.fontWeight = String(t.weight); }
      lt.fontSize = String(t.size);
      lt.lineHeight = String(Math.round(t.lh / t.size * 10000) / 10000);
      lt.letterSpacing = String(t.ls);
      lt.textTransform = t.transform === 'none' ? null : t.transform;
    });
    TYP[t.key] = lt;
    delete exT[t.key];
  }
  for (const k in exT) tryDo('remove extra typography ' + k, () => exT[k].remove());
  await sleep(50);
}

// ---------------------------------------------------------------- cleanup of the existing (fixed-position) library
async function cleanup(isTarget) {
  const file = penpot.currentFile;
  const oldPages = (file.pages || []).slice();
  if (isTarget) {
    say('Salvando uma versão de segurança no histórico: "' + VERSION_LABEL + '"…');
    try { await Promise.race([file.saveVersion(VERSION_LABEL), sleep(15000)]); } catch (e) { err('saveVersion', e); }
    const comps = (lib().components || []).slice();
    say('Removendo ' + comps.length + ' componentes antigos…');
    let k = 0;
    for (const c of comps) { tryDo('remove component', () => c.remove()); if (++k % 25 === 0) await sleep(10); }
    await sleep(300);
  }
  const first = penpot.createPage();
  first.name = 'Cover';
  await penpot.openPage(first);
  await waitFor(() => penpot.currentPage && penpot.currentPage.id === first.id, 4000);
  PAGE_FIRST = first;
  if (isTarget) {
    say('Removendo ' + oldPages.length + ' páginas antigas…');
    for (const p of oldPages) { tryDo('remove page ' + p.name, () => p.remove()); await sleep(10); }
  } else {
    for (const p of oldPages) { tryDo('remove empty page', () => p.remove()); }
  }
  await sleep(200);
}

const BUILD = [pageCover, pageColors, pageTypography, pageSpacing, pageRadius, pageIcons,
  pageButton, pageBadge, pageAvatar, pageSeparator, pageInput, pageTextarea, pageField, pageOTP, pageSelect, pageDropdown,
  pageCheckbox, pageSwitch, pageToggle, pageToggleGroup, pageTabs, pageProgress, pageSkeleton, pageSpinner,
  pageCard, pageAlert, pageSonner, pageAlertDialog, pageDialog, pageDrawer, pageItem, pageTable, pageChart, pageEmpty,
  pageAppHeader, pageBottomNav, pageStatCard, pageWorkoutCard, pageSetRow, pageNumberStepper, pageRestTimer, pageAchievement, pageLeaderboard, pageSteps];

function fileCheck() {
  const f = penpot.currentFile;
  if (!f) return { ok: false, why: 'Nenhum arquivo aberto.' };
  const isTarget = f.id === TARGET_FILE_ID || f.name === TARGET_FILE_NAME;
  if (isTarget) return { ok: true, isTarget: true, name: f.name, id: f.id };
  // other file: only allowed when it is a blank draft (one empty page) -> test run without deleting anything
  const pages = f.pages || [];
  let blank = pages.length === 1;
  try { blank = blank && (pages[0].root.children || []).length === 0; } catch (e) {}
  if (blank) return { ok: true, isTarget: false, name: f.name, id: f.id };
  return { ok: false, why: 'Este arquivo ("' + f.name + '") não é o "' + TARGET_FILE_NAME + '" e não está vazio. Nada foi alterado.' };
}

let running = false;
async function run() {
  if (running) return; running = true;
  const t0 = Date.now();
  try {
    try { penpot.flags.naturalChildOrdering = true; } catch (e) { err('flags', e); }
    try { penpot.flags.throwValidationErrors = true; } catch (e) {}
    const chk = fileCheck();
    if (!chk.ok) { say(chk.why, { finished: true, failed: true }); return; }
    PROGRESS = { done: 0, total: BUILD.length + 60 };
    say('Arquivo: ' + chk.name + (chk.isTarget ? ' (substituindo o conteúdo antigo)' : ' (rascunho vazio, teste)'));
    await cleanup(chk.isTarget);
    say('Atualizando cores e tipografias da biblioteca…');
    await syncTokens();
    for (const fn of BUILD) {
      const nm = fn.name.replace(/^page/, '');
      say('Página ' + (BUILD.indexOf(fn) + 1) + '/' + BUILD.length + ': ' + nm);
      try { await fn(); } catch (e) { err('page ' + nm, e); }
      PROGRESS.done++;
      await sleep(20);
    }
    try { const cover = (penpot.currentFile.pages || [])[0]; if (cover) await penpot.openPage(cover); } catch (e) {}
    const secs = Math.round((Date.now() - t0) / 1000);
    const summary = 'Concluído em ' + secs + ' s. Páginas: ' + STATS.pages + ' · componentes: ' + STATS.components + ' (ícones: ' + STATS.icons + ') · conjuntos de variantes: ' + STATS.variantSets +
      (STATS.variantFallbacks ? ' · conjuntos sem variantes (falha ao combinar): ' + STATS.variantFallbacks : '') + ' · cópias aninhadas: ' + STATS.copies + ' · quadros com auto layout: ' + STATS.flexBoards +
      (STATS.iconScaleFix ? ' · ícones redimensionados à mão: ' + STATS.iconScaleFix : '') + ' · erros: ' + ERRORS.length;
    say(summary, { finished: true, errors: ERRORS.slice(0, 200), stats: STATS });
    try { penpot.currentFile.setPluginData('anota-treino-lib', JSON.stringify({ version: 2, builtAt: new Date().toISOString(), stats: STATS, errors: ERRORS.length })); } catch (e) {}
  } catch (e) {
    err('run', e);
    say('Falhou: ' + (e && e.message ? e.message : e), { finished: true, failed: true, errors: ERRORS.slice(0, 200) });
  } finally { running = false; }
}

penpot.ui.open('Anota Treino — Biblioteca v2', UI_URL, { width: 340, height: 460 });
penpot.ui.onMessage((msg) => {
  if (!msg) return;
  if (msg.type === 'check') { const c = fileCheck(); penpot.ui.sendMessage({ type: 'check', ok: c.ok, isTarget: c.isTarget, why: c.why, name: c.name }); }
  if (msg.type === 'generate') run();
});

