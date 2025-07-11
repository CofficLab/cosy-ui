import TeamMemberBasicContainer from './TeamMemberBasicContainer.astro';
import TeamMemberWithSocialContainer from './TeamMemberWithSocialContainer.astro';
import TeamMemberCustomStyleContainer from './TeamMemberCustomStyleContainer.astro';
import TeamMemberShadowDemoContainer from './TeamMemberShadowDemoContainer.astro';

export const ComponentPackage = {
    ComponentContainers: {
        Basic: TeamMemberBasicContainer,
        WithSocial: TeamMemberWithSocialContainer,
        CustomStyle: TeamMemberCustomStyleContainer,
        ShadowDemo: TeamMemberShadowDemoContainer,
    },
}; 
