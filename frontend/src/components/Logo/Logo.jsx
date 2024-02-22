
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../../../others/logo/props-logos/props-logos_white.png'

export default function Logo({ paragraph, linkName, linkUrl = "/" }) {
    return (
        <div className="mb-5">
            <div className="flex justify-center">
                <img
                    alt="logo"
                    src={logo}
                    className='h-auto max-w-lg mx-auto'
                />
            </div>
            <p className="mt-2 text-center text-sm text-white mt-5">
                {paragraph}{' '}
                <Link to={linkUrl} className="font-medium text-blue-400 hover:text-purple-500">
                    {linkName}
                </Link>
            </p>
        </div>
    );
}

Logo.propTypes = {
    paragraph: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired,
    linkUrl: PropTypes.string
};