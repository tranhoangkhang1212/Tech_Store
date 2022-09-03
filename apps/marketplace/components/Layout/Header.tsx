import { ItemCount } from '@components/Custom';
import Input from '@components/Form/Input';
import Link from '@components/Router/Link';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    const [keyword, setKeyword] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    };

    const handleSearch = () => {
        console.log(keyword);
    };

    return (
        <div className="bg-gradient w-screen flex-center py-4">
            <div className="container overflow-hidden flex justify-between">
                <Image src="/assets/images/logo.webp" alt="logo" width="180px" height="55px" />
                <div className="flex-center bg-white h-[50px] p-1 rounded-md">
                    <Input className="w-[450px]" placeholder="Nhập tên sản phẩm ..." onChange={handleInputChange} />
                    <button className="bg-secondary h-full px-5 rounded-md bg-blue-gradient" onClick={handleSearch}>
                        <BsSearch className="w-[20px] h-[20px] text-white" />
                    </button>
                </div>
                <div className="flex text-white items-center">
                    <div className="flex w-[380px] justify-between mr-16 text-[14px]">
                        <div className="flex-center">
                            <img className="mr-[6px]" src="/assets/images/icons/account.png" />
                            <div>
                                <Link href="/account" name="Tài khoản" />
                                <Link href="/sign-in" name="Đăng nhập" />
                            </div>
                        </div>
                        <div className="flex-center relative">
                            <AiOutlineHeart className="text-[32px] mr-4" />
                            <ItemCount amount={0} className="left-[20%]" />
                            <Link href="/favorite" name="Sản phẩm <br/> yêu thích" />
                        </div>
                        <div className="flex-center h-[40px] px-4 rounded-md relative">
                            <img className="mr-4" src="/assets/images/icons/cart.png" />
                            <ItemCount amount={0} className="left-[25%]" />
                            <Link href="/cart" name="Giỏ hàng <br/> của bạn" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
