import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import AllCategoriesPageHook from '../../Hook/category/AllCategoriesPageHook'

const AllCategoryPage = () => {
    const [categories, loading, pageCount, getPage] = AllCategoriesPageHook();
    
    return (
        <div style={{minHeight:'670px'}}>
            <CategoryContainer categories={categories.data} loading={loading}/>
            {
                pageCount > 1 ?
                (
                    <Pagination 
                        pageCount={pageCount}
                        onPress={getPage}
                    />
                ) : null
            }
        </div>
    )
}

export default AllCategoryPage
