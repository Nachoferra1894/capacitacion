import './Home.scss'
import Background from '../../img/Back.jpeg'
import ArmyCard from '../../components/armyCard/ArmyCard'
import { useEffect,useState } from 'react'
import { civilizationApi } from '../../api/civilizationApi'
import MainNavbar from '../../components/mainNavbar/MainNavbar'
import { useSelector, useDispatch } from 'react-redux'
import {addCivilizations} from '../../redux/slices/civilizations'
import { Typography,CircularProgress } from '@material-ui/core'

const Home = () => {
    const [civilizations, setCivilizations] = useState([])
    const [showCivilizations, setShowCivilizations] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
        async function getData (){
            setLoading(true)
            try {
                const data = await civilizationApi.getCivilizations()
                dispatch(addCivilizations(data.civilizations))
                setCivilizations(data.civilizations)
                setLoading(false)
            }
            catch (err){
                console.log(err)
                setLoading(false)
            }
        }
        getData()
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
                    {
                        loading ? 
                            <div style={{marginTop: '5%'}}>
                                <CircularProgress color="secondary"/>
                            </div>
                        :
                        showCivilizations.length>0 ?
                            showCivilizations?.map((item,index)=>
                                <ArmyCard item={item}/>
                            )
                            :
                            <div style={{marginTop: '5%'}}>
                                <Typography variant='h3'>Couldn't find any civilizations</Typography>
                            </div>
                    }
                    </div>
                </div>
        </div>
    )
}

export default Home
