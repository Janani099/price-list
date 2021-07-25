import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
export function PriceList() {
  return (
    <div className="price-card">
      <Card className="cardDetail">
        <h5>From</h5>
        <h1>$0/month</h1>
        <hr />
        <CardContent className="detail">
          <span>
            <CheckIcon />
            Single User
          </span>
          <br />
          <span>
            <CheckIcon />
            5GB Storage
          </span>
          <br />
          <span>
            <CheckIcon />
            Unlimited Public Projects
          </span>
          <br />
          <span>
            <CheckIcon />
            Community Access
          </span>
          <br />
          <span>
            <CheckIcon />
            Unlimited Private Projects
          </span>
          <br />
          <span class="text-muted">
            <CloseIcon />
            Dedicated Phone Support
          </span>
          <br />
          <span class="text-muted">
            <CloseIcon />
            Free Subdomain
          </span>
          <br />
          <span class="text-muted">
            <CloseIcon />
            Monthly Status Reports
          </span>
          <br />
        </CardContent>
        <Button size="large" variant="contained" color="primary">
          Upload
        </Button>
        <br />
        <br />
      </Card>
    </div>
  );
}
