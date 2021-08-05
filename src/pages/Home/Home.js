import './Home.scss'
import Background from '../../img/Back.jpeg'
import ArmyCard from '../../components/armyCard/ArmyCard'
import { useEffect,useState } from 'react'
import { civilizationApi } from '../../api/civilizationApi'
import MainNavbar from '../../components/MainNavbar'

const Home = () => {
    const [civilizations, setCivilizations] = useState([])
    const [showCivilizations, setShowCivilizations] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        setCivilizations(["1","2","3","4","5","6"])
    },[])

    useEffect(()=>{
        setShowCivilizations(civilizations)
    },[civilizations])

    useEffect(()=>{
        search!=="" ? setShowCivilizations(civilizations.filter(x=>x.includes(search))):setShowCivilizations(civilizations)
        console.log(search,civilizations)
    },[search])

    const handleChangeSearch = (value) =>{
        setSearch(value)
    }

    return (
        <div>
            <MainNavbar handleSearch={handleChangeSearch}/>
            <div className="home-div-all">
                <div className="home-div-cards">
                    {showCivilizations.map((item,index)=>
                        <ArmyCard name={item}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home
