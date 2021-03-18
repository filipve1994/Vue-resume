// If you create a new resume, import it here:
import Cool from "@/resumes/cool";
import CoolRtl from "@/resumes/cool-rtl";
import CoolRtl2 from "@/resumes/cool-rtl2";
import Creative from "@/resumes/creative";
import Green from "@/resumes/green";
import LeftRight from "@/resumes/left-right";
import LeftRightProjects from "@/resumes/left-right-projects";
import LeftRightRtl from "@/resumes/left-right-rtl";
import MaterialDark from "@/resumes/material-dark";
import MaterialDarkProjects from "@/resumes/material-dark-projects";
import Oblique from "@/resumes/oblique";
import ObliqueProjects from "@/resumes/oblique-projects";
import ObliqueRtl from "@/resumes/oblique-rtl";
import Purple from "@/resumes/purple";
import SideBar from "@/resumes/side-bar";
import SideBarProjects from "@/resumes/side-bar-projects";
import SideBarRtl from "@/resumes/side-bar-rtl";
// import Creative from "@/resumes/";

const components = [];

export function registerGlobalComponents(vueInstance) {

  vueInstance.component(Cool.name, Cool);
  vueInstance.component(CoolRtl.name, CoolRtl);
  vueInstance.component(CoolRtl2.name, CoolRtl2);
  vueInstance.component(Creative.name, Creative);
  vueInstance.component(Green.name, Green);
  vueInstance.component(LeftRight.name, LeftRight);
  vueInstance.component(LeftRightProjects.name, LeftRightProjects);
  vueInstance.component(LeftRightRtl.name, LeftRightRtl);
  vueInstance.component(MaterialDark.name, MaterialDark);
  vueInstance.component(MaterialDarkProjects.name, MaterialDarkProjects);
  vueInstance.component(Oblique.name, Oblique);
  vueInstance.component(ObliqueProjects.name, ObliqueProjects);
  vueInstance.component(ObliqueRtl.name, ObliqueRtl);
  vueInstance.component(Purple.name, Purple);
  vueInstance.component(SideBar.name, SideBar);
  vueInstance.component(SideBarProjects.name, SideBarProjects);
  vueInstance.component(SideBarRtl.name, SideBarRtl);
  // vueInstance.component(Purple.name, Purple);

  components.forEach(({ name, component }) => {
    vueInstance.component(name, component)
  })
}
