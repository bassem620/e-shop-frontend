
import { useState, useEffect } from 'react'
import notify from './../../Hook/useNotification';
import { useSelector, useDispatch } from 'react-redux'
import { createProduct } from '../../redux/actions/productAction';
import { getCatSubcategories } from '../../redux/actions/subcategoryAction';
import { getAllCategories } from '../../redux/actions/categoryAction'
import { getAllBrands } from './../../redux/actions/brandAction';

const AddProductHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllBrands());
    }, [dispatch])

    const {categories} = useSelector(state => state.allCategories);
    const {brands} = useSelector(state => state.allBrands);
    const {subcategories} = useSelector(state => state.allSubcategories);
    const { products } = useSelector(state => state.allProducts)

    // subcategories selection functions
    const onSelect = (selectedList) => setSelectedSubID(selectedList);
    const onRemove = (selectedList) => setSelectedSubID(selectedList);

    // Options state
    const [options, setOptions] = useState([]);

    // useStates
    const [images, setImages] = useState({});
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAfter, setPriceAfter] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [CatID, setCatID] = useState('');
    const [BrandID, SetBrandID] = useState('');
    const [selectedSubID, setSelectedSubID] = useState([]);
    const [loading, setLoading] = useState(true);

    // Data onChange functions
    const onChangeProdName = e => {
        e.persist();
        setProdName(e.target.value);
    }

    const onChangeDescName = e => {
        e.persist();
        setProdDescription(e.target.value);
    }

    const onChangePriceBefore = e => {
        e.persist();
        setPriceBefore(e.target.value);
    }

    const onChangePriceAfter = e => {
        e.persist();
        setPriceAfter(e.target.value);
    }

    const onChangeQty = e => {
        e.persist();
        setQty(e.target.value);
    }

    const onChangeColor = e => {
        e.persist();
        setShowColor(!showColor);
    }


    // Colors states & functions
    const [showColor, setShowColor] = useState(false);
    const [colors, setColors] = useState([]);

    const handleChangeComplete = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor)
    }
    const removeColor = (color) => {
        const newColor = colors.filter(e => e !== color)
        setColors(newColor)
    }



    // onSelectCategory  
    const onSelectCategory = async e => {
        if (e.target.value !== 0) {
            await dispatch(getCatSubcategories(e.target.value))
        }
        setCatID(e.target.value)
    }

    useEffect(() => {
        if (CatID !== 0) {
            if (subcategories.data) {
                setOptions(subcategories.data)
            }
        } else
            setOptions([])
    }, [CatID, subcategories.data])

    // onSelectBrand
    const onSelectBrand = e => SetBrandID(e.target.value);


    // URL to file Fn
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }

    // onSubmit
    const handleSubmit = async e => {
        e.preventDefault();
        if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
            notify("من فضلك اكمل البيانات", "warn")
            return;
        }

        //  convert base 64 image to file 
        const imgCover = dataURLtoFile(images[0], Math.random() + ".png")
        //  convert array of base 64 image to file 
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png")
            }
        )

        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore);
        formData.append("priceAfterDiscount", priceAfter);
        formData.append("category", CatID);
        formData.append("brand", BrandID);

        setTimeout(() => {
            formData.append("imageCover", imgCover);
            itemImages.map( img => formData.append("images", img))
        }, 1000);

        colors.map( color => formData.append("colors", color))
        selectedSubID.map( sub => formData.append("subCategories", sub._id))
        setTimeout(async () => {
            setLoading(true)
            await dispatch(createProduct(formData))
            setLoading(false)
        }, 1000);
    }

    useEffect(() => {
        if (loading === false) {
            setCatID(0)
            setColors([])
            setImages({})
            setProdName('')
            setProdDescription('')
            setPriceBefore('السعر قبل الخصم')
            setPriceAfter('السعر بعد الخصم')
            setQty('الكمية المتاحة')
            SetBrandID(0)
            setSelectedSubID([])
            setTimeout(() => setLoading(true), 1500)
            if (products) {
                if (products.status === 201) {
                    notify("تم الاضافة بنجاح", "success")
                } else {
                    notify("هناك مشكله", "error")
                }
            }
        }
    }, [loading, products])

    return [onChangeDescName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefore, onChangeProdName, showColor, categories, brands, priceAfter, images, setImages, onSelect, onRemove, options, handleChangeComplete, removeColor, onSelectCategory, handleSubmit, onSelectBrand, colors, priceBefore, qty, prodDescription, prodName];
}

export default AddProductHook;