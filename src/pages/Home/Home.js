import './Home.scss'
import Background from '../../img/Back.jpeg'
import ArmyCard from '../../components/armyCard/ArmyCard'
import { useEffect,useState } from 'react'
import { civilizationApi } from '../../api/civilizationApi'
import MainNavbar from '../../components/MainNavbar'
import { useSelector, useDispatch } from 'react-redux'
import {addCivilizations} from '../../redux/slices/civilizations'

const Home = () => {
    const [civilizations, setCivilizations] = useState([])
    const [showCivilizations, setShowCivilizations] = useState([])
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    useEffect(async ()=>{
        const data = await civilizationApi.getCivilizations()
        dispatch(addCivilizations(data.civilizations))
        setCivilizations(data.civilizations)
    },[])

    useEffect(()=>{
        setShowCivilizations(civilizations)
    },[civilizations])

    useEffect(()=>{
        search!=="" ? setShowCivilizations(civilizations.filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))):setShowCivilizations(civilizations)
    },[search])

    const handleChangeSearch = (value) =>{
        setSearch(value)
    }

    return (
        <div>
            <MainNavbar handleSearch={handleChangeSearch}/>
            <div className="home-div-all">
                <div className="home-div-cards">
                    {showCivilizations?.map((item,index)=>
                        <ArmyCard item={item}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home
