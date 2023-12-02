import React from "react";
import AnúnciosData from "./Anúncios.json";

const Anuncios = () => {
  const tableHeaders = ["name", "position", "office", "age", "date", "salary"];

  return (
    <div className="card mt-3">
      <div className="card-datatable">
        <div className="dataTables_wrapper dt-bootstrap5">
          <div className="card-header flex-column flex-md-row d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start">
              <div className="dataTables_filter">
                <label>
                  {/* <FaSearch style={{ marginRight: "5px" }} /> */}
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table id="data-table-basic" className="table table-striped">
              <thead>
                <tr>
                  {tableHeaders.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {AnúnciosData.map((item, index) => (
                  <tr key={index}>
                    {tableHeaders.map((header, idx) => (
                      <td key={idx}>{item[header]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anuncios;
