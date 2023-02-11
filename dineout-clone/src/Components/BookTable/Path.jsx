import {
    AccordionItem,
    AccordionPanel,
    AccordionIcon,
    AccordionButton,
    Box,
    Accordion,
    Checkbox,
    CheckboxGroup,
    Stack,
    Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  } from "@chakra-ui/react";
  import { MinusIcon, AddIcon,ChevronRightIcon } from "@chakra-ui/icons";
  
function Path (){
    return(
        <div style={{marginLeft:"19px"}}>
<Breadcrumb spacing='7px' fontSize="14px" separator={<ChevronRightIcon color='gray.460' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'  color='gray.400'>Dineout</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#' color='gray.400'>Delhi</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#' color='gray.400'>Restaurants</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
        </div>
    )
}
export default Path;