//modules
import {Link} from 'react-router-dom';

//import Components
import { IconBtn } from "./Button";
import Avatar from './Avatar';
import Menu from './Menu';


//assets
import {logoLight,logoDark} from '../assets/assets';


const TopAppBar = () => {
  return (
    <header className="">
        <div className="">
            <IconBtn icon='menu'
            title='Menu'
            />

            <Link to='/' 
            className="">
                <img src={logoLight}
                width={133}
                height={24}
                alt="Synchat Logo" 
                className='dark:hidden'
                />
                <img src={logoDark}
                width={133}
                height={24}
                alt="Synchat Logo" 
                className='hidden dark:block'
                />
            </Link>
        </div>

        <div className="menu-wrapper">
            <IconBtn>
                <Avatar name='Piyush'/>
            </IconBtn>
            <Menu>
                
            </Menu>
        </div>
    </header>
  );
};

export default TopAppBar