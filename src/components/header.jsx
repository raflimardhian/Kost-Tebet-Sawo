import { Link } from 'react-router-dom';

function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="text-center text-sm text-gray-600 mt-5">
                {paragraph} {' '}
                <Link to={linkUrl} className="font-medium text-[#8BC349] hover:text-[#17415F]">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}

export default Header;