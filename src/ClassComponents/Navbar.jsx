import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            search:""
        }
    }
    postSearch(e){
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.setState({search:""})
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg background text-light sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-light" to="/" onClick={()=>this.props.changeSearch("")}>NewsApp</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon color"></span> */}
                        <i className="fa-solid fa-bars fa-lg color"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <NavLink className="nav-link  text-light" aria-current="page" to="/all" onClick={()=>this.props.changeSearch("")} >All</NavLink></li>
                            <li className="nav-item"> <NavLink className="nav-link  text-light" aria-current="page" to="/politics" onClick={()=>this.props.changeSearch("")} >Politics</NavLink></li>
                            <li className="nav-item"> <NavLink className="nav-link  text-light" aria-current="page" to="/stock market" onClick={()=>this.props.changeSearch("")} >Stock Market</NavLink></li>
                            <li className="nav-item"> <NavLink className="nav-link  text-light" aria-current="page" to="/education" onClick={()=>this.props.changeSearch("")} >Education</NavLink></li>
                            <li className="nav-item"> <NavLink className="nav-link  text-light" aria-current="page" to="/entertainment" onClick={()=>this.props.changeSearch("")} >Entertainment</NavLink></li>
                            <li className="nav-item"> <NavLink className="nav-link  text-light" aria-current="page" to="/science" onClick={()=>this.props.changeSearch("")} >Science</NavLink></li>
                            <li className="nav-item"> <NavLink className="nav-link  text-light" aria-current="page" to="/technology" onClick={()=>this.props.changeSearch("")} >Technology</NavLink></li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Others
                                </NavLink>
                                <ul className="dropdown-menu ">
                                    <li><NavLink className="dropdown-item" to="/sports"onClick={()=>this.props.changeSearch("")} >sports</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/cricket"onClick={()=>this.props.changeSearch("")} >cricket</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/olympics"onClick={()=>this.props.changeSearch("")} >olympics</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/economic"onClick={()=>this.props.changeSearch("")} >economic</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/health"onClick={()=>this.props.changeSearch("")} >health</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/wealth"onClick={()=>this.props.changeSearch("")} >wealth</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/world"onClick={()=>this.props.changeSearch("")} >world</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/jokes"onClick={()=>this.props.changeSearch("")} >Jokes</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("hi")} >Hindi</button></li>
                                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("en")} >English</button></li>
                                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("ru")} >Russia</button></li>

                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e)=>this.postSearch(e)}>
                            <input className="form-control me-2" type="search"  value={this.state.search} name='search' onChange={(e)=>this.setState({search:e.target.value})} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
