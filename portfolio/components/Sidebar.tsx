import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'


const Sidebar = () => {
  return (
    <div>
        <img 
            src="https://media-exp1.licdn.com/dms/image/C5603AQF-xs_p9tAV9A/profile-displayphoto-shrink_200_200/0/1617970692364?e=1651708800&v=beta&t=o4FiquzebOG7kr9GyjXKLP3YR9WB1NgzdCz74WBQCSA" 
            alt="user avatar"
            className='w-32 h-32 mx-auto rounded-full' 
        />
        <h3 className='my-4 text-3xl font-medium tracking-wider font-fredoka'>
            <span>Klas </span>   
            Holmberg
        </h3>
        <p className='px-2 py-1 my-3 bg-gray-300 rounded-full'>
            Software Developer
        </p>
        <a 
            className='flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full' 
            href='' 
            download='name'>
            <GiTie className='w-6 h-6'/>Download Resume
        </a>
        
        {/* Social Icons */}
        <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
            <a href="https://linkedin.com/in/klas-holmberg-95b70220b" target="_blank" rel="noopener">
                <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
            </a>
            <a href="https://github.com/goldh0rse" target="_blank" rel="noopener">
                <AiFillGithub className="w-8 h-8 cursor-pointer"/>
            </a>
            <a href="https://instagram.com/planetariet" target="_blank" rel="noopener">
                <AiFillInstagram className="w-8 h-8 cursor-pointer"/>
            </a>
        </div>

        {/* Address */}
        <div className='py-4 my-5 bg-gray-300 ' style={{marginLeft:'-1em', marginRight:'-1em'}}>
            <div className='flex items-center justify-center space-x-2'>
                <GoLocation />
                <span>Stockholm, Sweden</span>
            </div>
            <p className='my-2'>klas.g.holmberg@gmail.com</p>
            <p className='my-2'>+46705150914</p>
        </div>
        
        {/* Email button*/}
        <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-600 focus:outline-none'
            onClick={() => window.open('mailto:klas.g.holmberg@gmail.com')}
        >
            Email Me
        </button>
        <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-600'>Toggle Theme</button>
    </div>
  )
}

export default Sidebar