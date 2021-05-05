import React, { useState } from "react";
import { 
    Main, 
    DropDownContainer, 
    Archive, 
    ArchiveDropDown, 
    DropDownList, 
    ListItem 
} from './Header.elements';

const ArchiveDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);

  return (
        <Main>
            <Archive onClick={toggling}>Archive</Archive>
                <DropDownContainer>
                {isOpen && (
                    <ArchiveDropDown>
                        <DropDownList>
                            <ListItem>December 2020</ListItem>
                            <ListItem>November 2020</ListItem>
                            <ListItem>September 2020</ListItem>
                        </DropDownList>
                    </ArchiveDropDown>
                )}
            </DropDownContainer>
        </Main> 
  );
}

export default ArchiveDropdown;