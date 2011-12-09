<%@ WebService Language="C#" Class="AutoComplete" %>

using System;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;

[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[System.Web.Script.Services.ScriptService]
public class AutoComplete  : System.Web.Services.WebService {

    [WebMethod]
    public string[] autoComplete(string prefixText, int count)
    {
        return new string[] {
                prefixText + " 1",
                prefixText + " 2",
                prefixText + " 3",
                prefixText + " 4",
                prefixText + " 5"
            };
    }
    
}