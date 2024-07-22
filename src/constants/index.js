import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2019 - Presente",
    role: "Mestrado Integrado em Engenharia e Gestão de Sistemas de Informação",
    company: "Universidade do Minho, Braga",
    description: `Média Atual: 16,8`
  },
  {
    year: "2024 - Presente",
    role: "Investigador do Centro ALGORITMI",
    company: "Universidade do Minho, Braga",
    description: `Desenvolvimento de pesquisas na área da Realidade Aumentada e participação na 19ª Conferência Ibérica de Sistemas e Tecnologias
de Informação`
  }
];

export const ACADEMICS =[
  {
    context: "UC - Paradigmas de Programação",
    projet: "Projeto: Sistema de Gestão Hospitalar",
    description: `Desenvolvi uma aplicação informática com o objetivo de gerir diversos aspectos de um hospital, incluindo enfermarias, equipamentos, profissionais de saúde e pacientes. A aplicação foi projetada para oferecer funcionalidades essenciais, como autenticação de utilizadores, adição e exclusão de utilizadores, gestão de dados hospitalares e a visualização de dashboards informativas. Para implementar essas funcionalidades, utilizei programação orientada a objetos, empregando a linguagem Java e a plataforma NetBeans.`,
    technologies: ["Java", "NetBeans"],
  },
  {
    context: "UC - Programação para a WEB",
    projet: "Projeto: Aplicação Web para Gestão de Operações",
    description: "Adotei o conceito de REST para garantir uma clara separação entre cliente e servidor na aplicação. No front-end, utilizei HTML, CSS e JavaScript para o desenvolvimento da interface do utilizador. Para o back-end, empreguei Node.js para o desenvolvimento do servidor e Express.js para a construção de APIs RESTful. Esta experiência permitiu-me aplicar conceitos teóricos a problemas reais e trabalhar em colaboração com uma equipa para alcançar objetivos comuns.",
    technologies: ["HTML", "CSS", "SQL", "JavaScript"],
  },
  {
    context: "UC - Engenharia de Dados para Suporte à Tomada de Decisão",
    projet: "Projeto: Implementação de um Data Lakehouse",
    description: `Realizei a identificação de conjuntos de dados em diversos formatos, incluindo CSV, JSON e TEXT, e analisei casos de uso, questões analíticas e métricas associadas a esses dados. Para avaliar a qualidade dos dados, utilizei o Talend Open Studio. A manipulação dos dados foi realizada através da implementação de tecnologias como HDFS, Hive, Talend Big Data, Spark e Jupyter. Além disso, empreguei a linguagem Python para executar processos de Extração, Carregamento e Transformação (ELT) dos dados.`,
    technologies: ["Python", "ELT"],
  },
  {
    context: "UC - Desenvolvimento Organizacional com Tecnologias da Informação",
    projet: "Projeto: Simulação Empresarial em Tecnologia da Informação (TI)",
    description: `Esta cadeira permitiu uma compreensão abrangente do Desenvolvimento Organizacional com Tecnologias da Informação, particularmente no que respeita ao processo e respetivas fases, atividades, técnicas, ferramentas e resultados. Foi possível a definição e participação em processos de desenvolvimento organizacional através da adoção de TI. Elaboração de relatórios técnicos para diferentes fases do DOTI.`,
    technologies: ["DTC", "Organizagrama"],
  },
  {
    context: "UC - Gestão de Projetos em Tecnologias e Sistemas de Informação",
    projet: "Projeto: Simulação Empresarial em Gestão de Projetos",
    description: `Exercício de atividades de gestão de projetos, particularmente em projetos de tecnologias e sistemas de informação. Domínio de conceitos e técnicas utilizadas em diferentes fases de um projeto. Desenvolvimento de relações interpessoais, quer na perspetiva de relações entre elementos de uma mesma equipa de trabalho, quer na perspetiva da relação entre o gestor de projeto e o cliente.`,
    technologies: ["GanttProject"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Rua Nossa Senhora de Fátima nº90, Lagares, Felgueiras",
  phoneNo: "+351 919117062",
  email: "ricardojunio10@gmail.com",
  linkedin: "www.linkedin.com/in/ric3melo"
};
