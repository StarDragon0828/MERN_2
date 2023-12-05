import React, { useState, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";

const ItemGroup = () => {
    return (
    <div className="item-group pb-3">
        <div className="d-flex pt-2">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Praia"
                    aria-label="praia"
                    aria-describedby="basic-praia"
                />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="R$ 1,25"
                    aria-label="rs125 "
                    aria-describedby="basic-praia"
                />
            </div>
        </div>
        <div className="d-flex pt-2">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Serra Catarinense"
                    aria-label="serra-catarinense"
                    aria-describedby="basic-catarinense"
                />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="R$ 2,00"
                    aria-label="rs200"
                    aria-describedby="basic-catarinense"
                />
            </div>
        </div>
        <div className="d-flex pt-2">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Voo de Balao, Balonismo, Aventura"
                    aria-label="serra-aventura"
                    aria-describedby="basic-aventura"
                />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="R$ 2,00"
                    aria-label="rs200"
                    aria-describedby="basic-catarinense"
                />
            </div>
        </div>
    </div>
    )   
};


const PalavrasChave = () => {

    const [section, setSection] = useState([]);

    const handleSectionAdd = () => {
        setSection(section.concat(<ItemGroup />))
    }

    useEffect(() => {
      setSection(section.concat(<ItemGroup />))
    }, [])
    

    return (
        <div className="card mt-3">
            <div className="card-datatable">
                <div className="dataTables_wrapper dt-bootstrap5">
                    <div className="card-header flex-column flex-md-row d-flex justify-content-between align-items-center">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4 tagline">
                            Esta pagina e dedicada ao gerenciamento de palavras-chave. Aqui, os administradores tem a capacidade de adicionar novas palavras-chave a atribuir-lhes um valor especifico. Esses valores representam o custo diario para os anunciantes que desejam destacar seus anuncios com essas palavras-chave
                        </div>
                    </div>
                    <div className="main-section card-body">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4 title">
                            <h5>Palavras-chave e Valores</h5>
                        </div>
                        <div className="middle-section d-flex">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-4">
                                {section}
                                <div className="d-flex justify-content-center align-items-center p-3">
                                    <button type="button" className="btn" onClick={() => handleSectionAdd()}><i className="bi bi-plus me-2"></i> Adicionar outro grupo</button>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-4">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PalavrasChave;
