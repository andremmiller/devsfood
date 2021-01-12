import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import CategoryItem from '../../components/CategoryItem'
import Modal from '../../components/Modal'

import './style.css'
import api from '../../api'
import ReactTooltip from 'react-tooltip'
import ProductItem from '../../components/ProductItem'
import ModalProduct from '../../components/ModalProduct'

let searchTimer = null

export default () => {
    const [headerSearch, setHeaderSearch] = useState('')
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const [activePage, setActivePage] = useState(1)
    const [activeCategory, setActiveCategory] = useState(0)
    const [activeSearch, setActiveSearch] = useState('')

    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState({})

    const getProducts = async () => {
        const productsQuery = await api.getProducts(activeCategory, activePage, activeSearch)
        if (productsQuery.data) {
            setProducts(productsQuery.data.result.data)
            setTotalPages(productsQuery.data.result.pages)
            setActivePage(productsQuery.data.result.page)
        }
    }

    const handleProductClick = (data) => {
        setModalData(data)
        setShowModal(true)
    }

    useEffect(() => {
        clearTimeout(searchTimer)
        searchTimer = setTimeout(() => { 
            setActiveSearch(headerSearch)      
        }, 2000)
    }, [headerSearch])

    useEffect(() => {
        const getCategories = async () => {
            const categoriesQuery = await api.getCategories()
            if (categoriesQuery.data) {
                setCategories(categoriesQuery.data.result)
            }
            ReactTooltip.rebuild()
        }

        getCategories()
    }, [])

    useEffect(() => {
        setProducts([])
        getProducts()
    }, [activeCategory, activePage, activeSearch])

    return (
        <div className="home">
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&    
                <div className="categories-area">
                    Selecione uma categoria
                    <div className="categories-list">
                        <CategoryItem 
                            data={{id: 0, title: 'Todas as categorias', image: '/assets/food-and-restaurant.png'}} 
                            activeCategory={activeCategory} 
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, i) => (
                            <CategoryItem key={i} data={item} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                        ))}
                    </div>
                </div>
            }
            {products.length > 0 &&   
                <div className="products-area">
                    <div className="products-list">
                        {products.map((item, i) => (
                            <ProductItem key={i} data={item} onClick={handleProductClick} />
                        ))}
                    </div>
                </div>
            }
            {totalPages > 0 &&
                <div className="pagination-area">
                    {Array(totalPages).fill(0).map((item, i) => (
                        <div 
                            className={`pagination-item ${activePage === (i+1) ? 'pagination-item-active' : ''}`} 
                            key={i}
                            onClick={() => setActivePage(i + 1)}
                        >
                                {i + 1}
                        </div>
                    ))}
                </div>
            }
               
            <Modal show={showModal} setShow={setShowModal}>
                <ModalProduct data={modalData} setShowModal={setShowModal} />
            </Modal>
        </div>
    )
}