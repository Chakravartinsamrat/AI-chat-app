//Node Modules
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


//components
import { ExtendedFab } from './Button';
import Logo from './Logo';
import { IconBtn } from './Button';

const SideBar = ({isSidebarOpen, toggleSidebar}) => {
  return (
    <>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.1, ease:'easeOut'}}
      className={`sidebar ${isSidebarOpen ? 'active' : ''} `}>
        <div className='sidebar-inner'>
          <div className='h-16 grid items-center px-4 mb-4'>
            {/* logo */}
            <Logo />
          </div>
          <ExtendedFab
            href='/'
            text='New Chat'
            classes=''
            onClick={toggleSidebar}
          />

          <div className='overflow-y-auto -me-2 pe-1'>
            <p className='text-titleSmall h-9 grid items-center px-4'>
              Recent{' '}
            </p>

            <nav>
              <div className='relative group'>
                <NavLink
                  to=''
                  className='nav-link'
                  title=''
                >
                  <span className='material-symbols-rounded icon-small'>
                    chat_bubble
                  </span>
                  <span className='truncate'>New Conversation</span>
                  <div className='state-layer'></div>
                </NavLink>
                <IconBtn
                  icon='delete'
                  size='small'
                  classes='absolute 
                  top-1/2 
                  right-1.5 
                  -translate-y-1/2 
                  z-10 
                  opacity-0 
                  group-hover:opacity-100 
                  group:focus-within:opacity-100 
                  hidden 
                  lg:grid'
                  title='Delete'
                />
              </div>
            </nav>
          </div>
          <div className='mt-4
            h-14
            px-4
            grid
            items-center
            text-labelLarge
           text-light-onSurfaceVariant
           dark:text-dark-onSurfaceVariant
           border-light-surfaceContainerHigh
           dark:border-dark-surfaceContainerHigh
             truncate
           '>&copy; 2025 Piyush.C. All rights reserved.</div>
        </div>
      </motion.div>

      <div className={`overlay ${isSidebarOpen ? 'active' : ''}  `} onClick={toggleSidebar}></div>
    </>
  );
};

SideBar.propTypes = {
  isSidebarOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};


export default SideBar;
