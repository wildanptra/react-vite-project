/* eslint-disable react/prop-types */
function Header({ author }) {
    return (
        <>
            <h1>Belajar React Bareng {author ?? 'WPU'} 🚀</h1>
        </>
    );
}

export default Header;