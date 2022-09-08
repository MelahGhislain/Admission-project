
import { useContext } from 'react'
import AppContext from '../../AppContext/AppContext'
import Adress from '../../components/Froms/Adress'
import FatherInfo from '../../components/Froms/FatherInfo'
import MotherInfo from '../../components/Froms/MotherInfo'
import Header from '../../components/Header'

const ParentInfo = () => {

  const {parentIndex} = useContext(AppContext)

  return (
    <>
        <Header>
            <p className='text-2xl text-neutral-700 font-bold text-start'>Information Parental/Tutor</p>
        </Header>
        
        {parentIndex === 0? <FatherInfo /> : null}
        {parentIndex === 1? <MotherInfo /> : null}
        {parentIndex === 2? <Adress /> : null}
    
    </>
  )
}

export default ParentInfo