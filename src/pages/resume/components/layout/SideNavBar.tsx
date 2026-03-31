import { Briefcase, Brain, GraduationCap, FolderGit2, Award } from "lucide-react";

export function SideNavBar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 hidden lg:flex flex-col border-r border-outline-variant/15 bg-background pt-20 z-40">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant/30">
            <img
              className="w-full h-full object-cover"
              alt="Phuoc Truong"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCRQJ2rHpLh2Ia36JvhpwLKF2KLhbPTH-J-mphwjj_f-cYt80A_OnxZvErecmL832CRPGk_KEkwR8ltOvwS7pHFjAzUjtMXZhYFrhGrA-Og1FGWU7Eh8uZe7NJd3Md72n-IYp0jpesMRrPVvhK9HSFhDrmqjsDBklKOlJQdwJ1MlSaZYbuQ-pPRcI2YprUqwzQ2gRBLZNAXyayhuy0g77Kd_at6qV8SZ8xvDMatW6wuVIyXIcOlwmp99FjSjguT7mdzjgR9csKVg"
            />
          </div>
          <div>
            <h3 className="text-on-surface font-black text-lg leading-tight">
              PT.Dev
            </h3>
            <p className="font-headline uppercase text-[0.6875rem] tracking-widest text-primary">
              Flutter Architect
            </p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        <div className="flex items-center gap-3 px-4 py-3 text-primary bg-primary/10 rounded-r-full font-headline uppercase text-[0.6875rem] tracking-widest cursor-pointer">
          <Briefcase className="w-4 h-4" />
          <span>Experience</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:translate-x-1 transition-transform font-headline uppercase text-[0.6875rem] tracking-widest cursor-pointer">
          <Brain className="w-4 h-4" />
          <span>Skills</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:translate-x-1 transition-transform font-headline uppercase text-[0.6875rem] tracking-widest cursor-pointer">
          <GraduationCap className="w-4 h-4" />
          <span>Education</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:translate-x-1 transition-transform font-headline uppercase text-[0.6875rem] tracking-widest cursor-pointer">
          <FolderGit2 className="w-4 h-4" />
          <span>Projects</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:translate-x-1 transition-transform font-headline uppercase text-[0.6875rem] tracking-widest cursor-pointer">
          <Award className="w-4 h-4" />
          <span>Certifications</span>
        </div>
      </nav>
      <div className="p-6 mt-auto">
        <button className="w-full bg-surface-container-high border border-outline-variant/20 text-on-surface py-3 rounded-md font-headline uppercase text-[0.6875rem] tracking-widest hover:bg-surface-container-highest transition-colors">
          Hire Me
        </button>
      </div>
    </aside>
  );
}
