import BasicContainer from './BasicContainer.astro';
import CustomStyleContainer from './CustomStyleContainer.astro';
import AlignContainer from './AlignContainer.astro';
import AnchorContainer from './AnchorContainer.astro';

export const ComponentPackage = {
    ComponentContainers: {
        Basic: BasicContainer,
        CustomStyle: CustomStyleContainer,
        Align: AlignContainer,
        Anchor: AnchorContainer,
    },
}; 
