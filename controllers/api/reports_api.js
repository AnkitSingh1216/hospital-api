const Patient = require("../../models/patient");
const Report = require("../../models/report");
const status = {
    N: "Negative",
    TQ: "Travelled-Quarantine",
    SQ: "Symptoms-Quarantine",
    PA: "Positive-Admit"
}

// Get all reports by status
module.exports.getReportsByStatus = async function (request, response) {
    let stats = request.params.status;
Report.find({ },function(err,report){
    return response.json(200, {
                    status: 200,
                    message: "All Reports with status",
                     data: {
                         report: report
                     }
                 })
})
}

module.exports.createReport=function(req,res){

    Report.create({
        doctor:123,
        patient:req.params.id,
        status:req.body.status
        
    },function(err,report){
        if(err){
            console.log(err)
            return res.json(500,{
                status: 500,
                message: "Error Creating Report"
            })
        }
        return res.json(200, {
            status: 200,
            message: "All Reports with status ",
            data: {
                report: report
            }
        })


    })

}