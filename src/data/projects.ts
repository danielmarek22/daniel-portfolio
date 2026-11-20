interface ProjectLink {
  href: string;
  label: string;
}

interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  treatment?: "concept" | "diagram" | "mark" | "wordmark";
  caption?: string;
}

interface ProjectStage {
  title: string;
  metadata: string;
  description: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  metadata?: string;
  status?: string;
  paragraphs?: readonly string[];
  stages?: readonly ProjectStage[];
  recognition?: string;
  technologies?: readonly string[];
  image?: ProjectImage;
  links?: readonly ProjectLink[];
  featured?: boolean;
  layout?: "horizontal";
}

interface ProjectSection {
  id: string;
  title: string;
  projects: readonly Project[];
}

export const projectSections: readonly ProjectSection[] = [
  {
    id: "industrial",
    title: "Industrial & Space Research",
    projects: [
      {
        title: "FAST-EO + CCN",
        subtitle: "Foundation Models for Earth Observation",
        metadata: "KP Labs",
        featured: true,
        stages: [
          {
            title: "FAST-EO",
            metadata: "ESA Φ-lab · 2024–2025",
            description:
              "Prepared datasets and fine-tuned foundation models for detecting methane emissions in multispectral satellite imagery.",
          },
          {
            title: "CCN",
            metadata: "Continuation · Current work",
            description:
              "I focus on model compression and knowledge distillation to reduce the computational requirements of deep learning models.",
          },
        ],
        technologies: [
          "Python",
          "PyTorch",
          "Multispectral Data",
          "Foundation Models",
          "Model Compression",
          "Knowledge Distillation",
        ],
        image: {
          src: "projects/earth-observation-concept.svg",
          alt: "",
          width: 560,
          height: 420,
          treatment: "concept",
          caption: "Earth observation concept illustration",
        },
        links: [{ label: "Project Website", href: "https://www.fast-eo.eu/" }],
      },
      {
        title: "SPARK",
        subtitle:
          "Smart on-board Processing And Real-time Knowledge (SPARK) for High Resolution Optical Imagers.",
        paragraphs: [
          "Contributed to AI-based atmospheric correction for high-resolution optical satellite imagery, focusing on fine-tuning deep learning models for the target application.",
        ],
        technologies: ["Optical Satellite Imagery", "Atmospheric Correction", "Model Fine-Tuning"],
      },
      {
        title: "Simulated PhiSat-2 Methane Benchmark Dataset",
        metadata: "2025",
        paragraphs: [
          "Co-authored a public methane detection benchmark based on simulated PhiSat-2 imagery derived from AVIRIS-NG hyperspectral data.",
        ],
        technologies: ["Earth Observation", "Hyperspectral Data", "Synthetic Imagery"],
        links: [{ label: "View Dataset", href: "https://doi.org/10.5281/zenodo.14900454" }],
      },
    ],
  },
  {
    id: "academic",
    title: "Academic Research",
    projects: [
      {
        title: "Machine Learning Algorithms for Autonomous Rovers",
        subtitle: "Bird’s-eye-view perception for planetary rovers",
        metadata: "2023 - 2024",
        featured: true,
        paragraphs: [
          "Development of deep learning-based perception systems for autonomous planetary rover concepts.",
          "The project focused on scene understanding, abstract spatial representation, and evaluation-driven architecture refinement.",
          "Work included synthetic dataset generation, implementation of Bird's Eye View models for abstract environment mapping, modification of state-of-the-art deep learning architectures, and proposal of custom evaluation metrics.",
        ],
        recognition: "Awarded 3rd place in the Polish Space Agency thesis competition.",
        technologies: ["Python", "PyTorch", "MLflow", "Docker", "Jenkins"],
        image: {
          src: "project-rover.jpg",
          alt: "Rover diagram surrounded by camera views of lunar terrain",
          width: 545,
          height: 445,
          treatment: "diagram",
        },
        links: [{ label: "View on GitHub", href: "https://github.com/danielmarek22/leveraging-bev-rovers" }],
      },
      {
        title: "Depth Estimation from Stereoscopic Images Using Deep Learning",
        metadata: "2023 - 2024",
        paragraphs: [
          "Application of state-of-the-art deep learning techniques for stereo-based depth estimation and 3D scene reconstruction in robotic systems.",
          "Designed and trained models using synthetic datasets and evaluated their performance in generating three-dimensional spatial maps of the environment.",
        ],
        technologies: ["Python", "PyTorch", "Open3D", "OpenCV"],
        image: {
          src: "project-depth.jpg",
          alt: "Color-coded depth map of a rocky scene",
          width: 320,
          height: 256,
        },
        links: [{ label: "View on GitHub", href: "https://github.com/danielmarek22/rover-stereo-depth" }],
      },
      {
        title: "Extraterrestrial Rock Segmentation Using Machine Learning",
        metadata: "2022 - 2023",
        paragraphs: [
          "End-to-end deep learning pipeline for segmentation of lunar landscape imagery, designed with consideration for on-board inference and embedded constraints.",
          "Compared model architectures, evaluated performance, and implemented quantization strategies for deployment on resource-constrained systems.",
        ],
        recognition: "Awarded 3rd place in the Trumpf Huettinger engineering thesis competition.",
        technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas", "MLflow", "Embedded Optimization"],
        image: {
          src: "project-rock.jpg",
          alt: "Segmentation overlay highlighting rocks on rendered planetary terrain",
          width: 320,
          height: 320,
        },
        links: [{ label: "View on GitHub", href: "https://github.com/danielmarek22/onboard-rock-segmentation" }],
      },
    ],
  },
  {
    id: "independent",
    title: "Independent R&D",
    projects: [
      {
        title: "Project Astra",
        subtitle: "Local Autonomous AI Agent",
        status: "Active Development",
        featured: true,
        paragraphs: [
          "An experimental local AI agent combining persistent memory, tool use, autonomous workflows, and multimodal interaction in a modular architecture.",
        ],
        technologies: ["Python", "Local LLMs", "Agent Architecture", "Memory Systems"],
        image: {
          src: "projects/astra-mark.webp",
          alt: "Project Astra logo",
          width: 480,
          height: 480,
          treatment: "mark",
        },
        links: [{ label: "Technical Documentation", href: "https://danielmarek22.github.io/astra-demo/" }],
      },
      {
        title: "ELARA",
        layout: "horizontal",
        status: "Early-stage R&D",
        paragraphs: [
          "The current prototype uses spacecraft simulation to study how AI agents make tasking decisions under resource constraints.",
          "The longer-term research explores how agent-based AI could support autonomous space operations and assist crews with tasks and decisions.",
        ],
        technologies: ["Python", "Basilisk", "BSK-RL", "Local LLMs"],
        image: {
          src: "projects/elara-mark.webp",
          alt: "ELARA logo",
          width: 768,
          height: 576,
          treatment: "wordmark",
        },
      },
    ],
  },
];
