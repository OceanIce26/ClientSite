import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLang();
  const folderName = "SchwungBouw";
  return (
    <Layout>
      {/* Page header */}
      <div
        className="relative py-24 overflow-hidden"
        style={{ background: "hsl(222 22% 4%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, hsl(214 92% 58% / 0.05) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-5 border border-primary/25 bg-primary/8 px-4 py-1.5 rounded-full">
              {t.nav.projects}
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
              {t.projects.title}
            </h1>

            <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
              {t.projects.sub}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/7 card-glow"
                style={{ background: "hsl(222 20% 8%)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={folderName + project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    style={{ filter: "brightness(0.85)" }}
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full text-white"
                      style={{
                        background: "hsl(214 92% 58%)",
                        boxShadow: "0 0 10px hsl(214 92% 58% / 0.4)",
                      }}
                    >
                      {t.projects.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1.5 text-white group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
// import { Layout } from "@/components/Layout";
// import { motion } from "framer-motion";
// import { useLang } from "@/contexts/LanguageContext";
// import { useEffect, useState } from "react";

// type Project = {
//   image: string;
//   title: string;
//   description: string;
// };

// export default function Projects() {
//   const { t } = useLang();
//   const [projects, setProjects] = useState<Project[]>([]);

//   const folderName = "SchwungBouw";
//   useEffect(() => {
//     fetch(folderName + "/texts/ProjectDescriptions.json")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`Failed to fetch JSON: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data: Project[]) => {
//         setProjects(data);
//       })
//       .catch((err) => {
//         console.error("Failed to load projects:", err);
//       });
//   }, []);

//   return (
//     <Layout>
//       {/* Page header */}
//       <div
//         className="relative py-24 overflow-hidden"
//         style={{ background: "hsl(222 22% 4%)" }}
//       >
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse 60% 80% at 50% 50%, hsl(214 92% 58% / 0.05) 0%, transparent 70%)",
//           }}
//         />

//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-5 border border-primary/25 bg-primary/8 px-4 py-1.5 rounded-full">
//               {t.nav.projects}
//             </span>

//             <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
//               {t.projects.title}
//             </h1>

//             <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
//               {t.projects.sub}
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Gallery */}
//       <div className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={`${project.title}-${index}`}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.08, duration: 0.6 }}
//                 className="group cursor-pointer rounded-2xl overflow-hidden border border-white/7 card-glow"
//                 style={{ background: "hsl(222 20% 8%)" }}
//               >
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   <img
//                     src={folderName + project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
//                     style={{ filter: "brightness(0.85)" }}
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

//                   <div className="absolute top-4 left-4">
//                     <span
//                       className="text-xs font-bold px-3 py-1 rounded-full text-white"
//                       style={{
//                         background: "hsl(214 92% 58%)",
//                         boxShadow: "0 0 10px hsl(214 92% 58% / 0.4)",
//                       }}
//                     >
//                       {t.projects.badge}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-bold text-lg mb-1.5 text-white group-hover:text-primary transition-colors duration-200">
//                     {project.title}
//                   </h3>

//                   <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
//                     {project.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }
// import { Layout } from "@/components/Layout";
// import { motion } from "framer-motion";
// import { useLang } from "@/contexts/LanguageContext";

// //const { Client } = require('@replit/object-storage');
// //const client = new Client();

// const projectImages = [
//   "/images/project-1.png",
//   "/images/project-2.png",
//   "/images/project-3.png",
//   "/images/project-6.png",
//   "/images/project-6.png",
//   "/images/project-6.png",
//   "/images/project-6.png",
// ];

// export default function Projects() {
//   const { t } = useLang();

//   return (
//     <Layout>
//       {/* Page header */}
//       <div
//         className="relative py-24 overflow-hidden"
//         style={{ background: "hsl(222 22% 4%)" }}
//       >
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse 60% 80% at 50% 50%, hsl(214 92% 58% / 0.05) 0%, transparent 70%)",
//           }}
//         />
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-5 border border-primary/25 bg-primary/8 px-4 py-1.5 rounded-full">
//               {t.nav.projects}
//             </span>
//             <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
//               {t.projects.title}
//             </h1>
//             <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
//               {t.projects.sub}
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Gallery */}
//       <div className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {t.projects.items.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.08, duration: 0.6 }}
//                 className="group cursor-pointer rounded-2xl overflow-hidden border border-white/7 card-glow"
//                 style={{ background: "hsl(222 20% 8%)" }}
//               >
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   <img
//                     src={projectImages[index]}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
//                     style={{ filter: "brightness(0.85)" }}
//                   />
//                   {/* Gradient overlay on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
//                   {/* Badge */}
//                   <div className="absolute top-4 left-4">
//                     <span
//                       className="text-xs font-bold px-3 py-1 rounded-full text-white"
//                       style={{
//                         background: "hsl(214 92% 58%)",
//                         boxShadow: "0 0 10px hsl(214 92% 58% / 0.4)",
//                       }}
//                     >
//                       {t.projects.badge}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="font-bold text-lg mb-1.5 text-white group-hover:text-primary transition-colors duration-200">
//                     {project.title}
//                   </h3>
//                   <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
//                     {project.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }
