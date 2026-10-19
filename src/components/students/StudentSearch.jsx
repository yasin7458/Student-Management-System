
import { FaSearch } from "react-icons/fa";

function StudentSearch({ search, setSearch }) {
    return (
        <div className="student-search-box">
            <FaSearch className="student-search-icon" />

            <input
                type="search"
                placeholder="Search student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default StudentSearch;
