import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine()); // return 값이 string으로 고정이므로 형변환 필수
		int cnt = 0;
		
		while(true) {
			if(N == 4 || N ==7) {
				System.out.println(-1);
				break;
			}
			if(N % 5 == 0) {
				cnt += N / 5;
				System.out.println(cnt);
				break;
			}else {
				N -= 3;
				cnt++;
			}
		}

	}

}
